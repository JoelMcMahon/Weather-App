export const formatDate = (dateString: string, locale: string) => {
  let timezone: any;

  if (locale === "en-GB") {
    timezone = "Europe/London";
  } else if (locale === "fr") {
    timezone = "Europe/Paris";
  } else if (locale === "en-US") {
    timezone = "America/New_York";
  }

  const date = new Date(dateString);

  const formattedDate = date.toLocaleString(locale, {
    timeZone: timezone,
    hour12: locale === "en-US" ? true : false,
    timeStyle: "short",
  });
  return formattedDate;
};
