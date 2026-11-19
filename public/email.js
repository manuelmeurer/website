// Builds the email link at runtime so the address isn't in the HTML for
// spam bots to harvest. The link stays hidden without JavaScript.
for (const link of document.querySelectorAll("a[data-email-user]")) {
  link.href = `mailto:${link.dataset.emailUser}@${link.dataset.emailDomain}`;
  link.hidden = false;
}
