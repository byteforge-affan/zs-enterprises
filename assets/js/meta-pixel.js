/* Z&S Enterprises — consent-gated Meta Pixel (Pixel ID 1085800224443491) */
(function () {
  "use strict";
  var key = "zs_marketing_consent";
  var pixelId = "1085800224443491";
  function getConsent() { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function saveConsent(v) { try { localStorage.setItem(key, v); } catch (e) {} }
  function startPixel() {
    if (window.__zsPixelStarted) return;
    window.__zsPixelStarted = true;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", pixelId);
    fbq("track", "PageView");
  }
  function render() {
    if (document.getElementById("zs-marketing-consent")) return;
    var wrap=document.createElement("div");
    wrap.id="zs-marketing-consent";
    wrap.setAttribute("role","dialog");
    wrap.setAttribute("aria-label","Marketing cookies");
    wrap.style.cssText="position:fixed;bottom:16px;left:16px;right:16px;max-width:520px;z-index:2147483640;background:#14231d;color:#fbf8f1;padding:18px 20px;border:1px solid #b7a477;border-radius:12px;box-shadow:0 12px 35px #0005;font:14px/1.6 system-ui,sans-serif";
    wrap.innerHTML='<p style="margin:0 0 12px">May we use Meta Pixel to measure website visits and enquiries for advertising? It is optional. <a href="/privacy.html" style="color:#e5c888;text-decoration:underline">Privacy Policy</a></p><div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" data-consent="accepted" style="padding:9px 16px;background:#e5c888;color:#14231d;border:0;border-radius:6px;cursor:pointer">Accept</button><button type="button" data-consent="declined" style="padding:9px 16px;background:transparent;color:#fbf8f1;border:1px solid #fbf8f1;border-radius:6px;cursor:pointer">Decline</button></div>';
    wrap.addEventListener("click",function(e){var b=e.target.closest("button[data-consent]");if(!b)return;var v=b.getAttribute("data-consent");saveConsent(v);wrap.remove();if(v==="accepted")startPixel();});
    document.body.appendChild(wrap);
  }
  function init() { if(getConsent()==="accepted")startPixel(); else if(getConsent()!=="declined")render(); }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
