import { DateTime } from "luxon";

import { feedPlugin } from "@11ty/eleventy-plugin-rss";


// See https://moment.github.io/luxon/#/zones?id=specifying-a-zone
// Use the TZ identifier https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const TIME_ZONE = "America/Chicago";
const FRONT_MATTER_DATE_FORMAT = "MM-dd-yy hh:mm"; // 12-31-20 23:59
const READABLE_DATE_FORMAT = "dd LLLL yyyy"; // 01 January 2020

export default function (eleventyConfig) {

  eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "update", // iterate over `collections.posts`
			limit: 5,     // 0 means no limit
			sort: "auto",  // or "descending", "ascending"
		},
		metadata: {
			language: "en",
			title: "animal's den ➜ personal updates",
			subtitle: "personal site updates for chimera.pet",
			base: "https://chimera.pet/home/",
			author: {
				name: "Chimera",
				email: "mail@chimera.pet", // Optional
			}
		}
	});

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/chimerapet.gif");
  eleventyConfig.addPassthroughCopy("./src/chimerapet2.gif");
  eleventyConfig.addPassthroughCopy("./src/feed.xml");

  // Defines shortcode for generating post excerpts

  // Datetime parsing
  eleventyConfig.addDateParsing(function(dateValue) {
    if (dateValue instanceof Date) {
      return dateValue;
    } else if (typeof dateValue === "string") {
      return DateTime.fromFormat(dateValue, "MM-dd-yy hh:mm", { zone: TIME_ZONE });
    } else {
      return dateValue;
    }
  });

  // Human friendly date formatting
  eleventyConfig.addFilter("readableDate", function(dateObj) {
    if (dateObj instanceof DateTime) {
      return dateObj.toFormat("LLLL dd, yyyy");
    } else if (dateObj instanceof Date) {
      return DateTime.fromJSDate(dateObj).toFormat("LLLL dd, yyyy");
    } else {
      return "Unknown date";
    }
  });
};




export const config = {
  templateFormats: ["njk", "11ty.js", "md", "html"],
  passthroughFileCopy: true,
  dir: {
    input: "src",
    output: "public",
    includes: "_includes",
  },
};
