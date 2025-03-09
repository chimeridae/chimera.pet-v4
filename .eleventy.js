import { DateTime } from "luxon";

// See https://moment.github.io/luxon/#/zones?id=specifying-a-zone
// Use the TZ identifier https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const TIME_ZONE = "America/Chicago";
const FRONT_MATTER_DATE_FORMAT = "MM-dd-yy hh:mm"; // 12-31-20 23:59
const READABLE_DATE_FORMAT = "dd LLLL yyyy"; // 01 January 2020

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");

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
      return dateObj.toFormat("dd LLLL yyyy");
    } else if (dateObj instanceof Date) {
      return DateTime.fromJSDate(dateObj).toFormat("dd LLLL yyyy");
    } else {
      return "Unknown date";
    }
  });
};


export const config = {
  passthroughFileCopy: true,
  dir: {
    input: "src",
    output: "public",
    includes: "_includes",
  },
};
