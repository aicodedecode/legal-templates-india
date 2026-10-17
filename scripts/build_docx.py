"""
Build Word versions of every template for lawyers.

Usage:
    python3 scripts/build_docx.py            # writes dist/
    python3 scripts/build_docx.py mutual-nda # specific templates

For each template it writes:
    dist/<id>.docx            clean: drafting notes removed, blanks highlighted as [Field label]
    dist/<id>-annotated.docx  drafting notes kept as shaded paragraphs, for markup
and a zip of all files: dist/legal-templates-india-docx.zip

Requires pandoc on PATH and python-docx (for the house reference styles).
"""

import shutil
import subprocess
import sys
import zipfile

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

from common import ROOT, iter_slugs, load_template
from fill import render

DIST = ROOT / "dist"
REFERENCE = DIST / "reference.docx"
NOTICE = ("AI-assisted draft from the open-source legal-templates-india library (CC0). "
          "Not legal advice: have an advocate qualified in India review it, and stamp it under "
          "the applicable State Stamp Act, before signing. Delete this notice before use.")
BODY_FONT = "Times New Roman"


def set_font(style, size, bold=None, italic=None, color=RGBColor(0, 0, 0)):
    style.font.name = BODY_FONT
    rfonts = style.element.rPr.rFonts
    rfonts.set(qn("w:eastAsia"), BODY_FONT)
    # Theme font attributes take precedence over the explicit font name.
    for attr in ("w:asciiTheme", "w:hAnsiTheme", "w:eastAsiaTheme", "w:cstheme"):
        rfonts.attrib.pop(qn(attr), None)
    style.font.size = Pt(size)
    style.font.color.rgb = color
    if bold is not None:
        style.font.bold = bold
    if italic is not None:
        style.font.italic = italic


def shade(style, fill="EDEFF2"):
    ppr = style.element.get_or_add_pPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), fill)
    ppr.append(shd)


def build_reference():
    """Create a pandoc reference.docx with conservative law-firm styling."""
    data = subprocess.run(["pandoc", "--print-default-data-file", "reference.docx"],
                          check=True, capture_output=True).stdout
    REFERENCE.write_bytes(data)
    doc = Document(REFERENCE)
    for section in doc.sections:
        section.page_width, section.page_height = Cm(21.0), Cm(29.7)
        for side in ("left_margin", "right_margin", "top_margin", "bottom_margin"):
            setattr(section, side, Cm(2.54))
    # Look styles up by name directly: python-docx's styles["Heading 1"] lowercases
    # built-in names and misses pandoc's styles.
    styles = {s.name: s for s in doc.styles}
    for name in ("Normal", "Body Text", "First Paragraph", "Compact"):
        set_font(styles[name], 11.5)
        styles[name].paragraph_format.space_after = Pt(6)
        styles[name].paragraph_format.line_spacing = 1.15
    for name in ("Body Text", "First Paragraph"):
        styles[name].paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    for name, size in (("Title", 16), ("Heading 1", 14), ("Heading 2", 12), ("Heading 3", 11.5)):
        set_font(styles[name], size, bold=True)
        styles[name].paragraph_format.space_before = Pt(12)
        styles[name].paragraph_format.keep_with_next = True
    styles["Heading 1"].paragraph_format.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_font(styles["Block Text"], 10, italic=True, color=RGBColor(0x37, 0x41, 0x51))
    shade(styles["Block Text"])
    doc.save(REFERENCE)


def to_docx(markdown, out, title):
    subprocess.run(["pandoc", "-f", "markdown", "-o", str(out), f"--reference-doc={REFERENCE}",
                    "--metadata", f"title-meta={title}"],
                   input=markdown.encode("utf-8"), check=True)


def build(slug):
    meta, body = load_template(slug)
    # Unfilled blanks become highlighted [Field label] text in Word.
    blanks = {f["key"]: "[\\[" + f["label"].replace("[", "(").replace("]", ")") + "\\]]{.mark}"
              for f in meta["fields"]}
    notice = f"> {NOTICE}\n\n"
    outputs = []
    for suffix, keep_notes in (("", False), ("-annotated", True)):
        text, _ = render(body, blanks, keep_notes=keep_notes)
        out = DIST / f"{slug}{suffix}.docx"
        to_docx(notice + text, out, meta["title"])
        outputs.append(out)
    return outputs


def main(argv):
    if not shutil.which("pandoc"):
        sys.exit("pandoc is required: https://pandoc.org/installing.html")
    DIST.mkdir(exist_ok=True)
    build_reference()
    slugs = argv or iter_slugs()
    files = [path for slug in slugs for path in build(slug)]
    archive = DIST / "legal-templates-india-docx.zip"
    with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as zf:
        for path in files:
            zf.write(path, path.name)
    REFERENCE.unlink()
    print(f"Wrote {len(files)} .docx files and {archive.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
