let toggleTheme = e=>{
    setTheme("dark" == e ? "light" : "dark")
}
  , setTheme = e=>{
    transTheme(),
    setHighlight(e),
    setGiscusTheme(e),
    e ? document.documentElement.setAttribute("data-theme", e) : document.documentElement.removeAttribute("data-theme"),
    localStorage.setItem("theme", e),
    "undefined" != typeof medium_zoom && medium_zoom.update({
        background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee"
    })
}
  , setHighlight = e=>{
    "dark" == e ? (document.getElementById("highlight_theme_light").media = "none",
    document.getElementById("highlight_theme_dark").media = "") : (document.getElementById("highlight_theme_dark").media = "none",
    document.getElementById("highlight_theme_light").media = "")
}
  , setGiscusTheme = e=>{
    function t(e) {
        const t = document.querySelector("iframe.giscus-frame");
        t && t.contentWindow.postMessage({
            giscus: e
        }, "https://giscus.app")
    }
    t({
        setConfig: {
            theme: e
        }
    })
}
  , transTheme = ()=>{
    document.documentElement.classList.add("transition"),
    window.setTimeout(()=>{
        document.documentElement.classList.remove("transition")
    }
    , 500)
}
  , initTheme = e=>{
    if (null == e || "null" == e) {
        const t = window.matchMedia;
        t && t("(prefers-color-scheme: dark)").matches && (e = "dark")
    }
    setTheme(e)
}
;
initTheme(localStorage.getItem("theme"));
