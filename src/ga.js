// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gaEvent = async ({ action, category, label, value }) => {

await window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })

}