import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
    return rss({
        title: "My own website & blog",
        description: "I definitely need a description",
        site: "http://not_decided_yet.com/",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: "<language>en-us</language>"
    });
}

