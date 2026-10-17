"""
Smoke test for mcp-server/server.py: start it over stdio and call each tool once.

Usage:
    python3 mcp-server/smoke_test.py
"""

import asyncio
import json
import sys
from pathlib import Path

import yaml
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

ROOT = Path(__file__).resolve().parent.parent


def payload(result):
    if getattr(result, "isError", False):
        raise AssertionError(result.content[0].text)
    if getattr(result, "structuredContent", None):
        return result.structuredContent
    return json.loads(result.content[0].text)


async def main():
    params = StdioServerParameters(command=sys.executable, args=[str(ROOT / "mcp-server" / "server.py")])
    values = yaml.safe_load((ROOT / "examples" / "acme.yaml").read_text())
    async with stdio_client(params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()
            tools = {t.name for t in (await session.list_tools()).tools}
            assert tools == {"list_templates", "get_template", "get_fields", "fill_template"}, tools

            listing = payload(await session.call_tool("list_templates", {"category": "fundraising"}))
            assert listing["count"] >= 1, listing

            fields = payload(await session.call_tool("get_fields", {"template_id": "mutual-nda"}))
            assert fields["fields"][0]["key"], fields

            filled = payload(await session.call_tool(
                "fill_template", {"template_id": "mutual-nda", "values": values}))
            assert values["company_name"] in filled["markdown"]
            assert "Drafting note" not in filled["markdown"]
            print(f"ok: {len(tools)} tools, {listing['count']} fundraising templates, "
                  f"{len(filled['missing_fields'])} NDA fields left for the user")


if __name__ == "__main__":
    asyncio.run(main())
