

const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, "g"), replacement);
};

// Translation Function
function __(string, params = {}) {
  let found = "";
  var siteLang = localStorage.getItem("lang");
  if(siteLang !== "en" && siteLang !== "tr") {
    siteLang = "tr";
    localStorage.setItem("lang", lang);
  }
  switch (siteLang) {
    case "en":
      found = translationWords[string];
      break;
  }

  if (found !== undefined && found !== "") {
    return __parse(found, params);
  }

  return __parse(string, params);
}

// Parse Function
function __parse(string, params = {}) {
  const length = Object.keys(params).length;

  if (length > 0) {
    Object.keys(params).forEach((key) => {
      const value = params[key];

      if (key !== "" && value !== "") {
        string = replaceAll(string, "{" + key + "}", value);
      }
    });
  }

  return string;
}

// Check Language
$(document).ready(function(){
    var lang = localStorage.getItem("lang");
    if(lang !== "en" && lang !== "tr") {
        lang = "tr";
        localStorage.setItem("lang", lang);
    }
    $("html").attr("lang", lang);
    $(".lang-btn-container a").each(function() {
        $(this).removeClass("active");
        if ($(this).attr("data-lang") === lang) {
            $(this).addClass("active");
        }
    });
});
// Change language
$(document).on("click", ".lang-btn-container a", function(e) {
    e.preventDefault();
    var lang = $(this).attr("data-lang");
    localStorage.setItem("lang", lang);
    location.reload();
});

$(document).on('click', '.nav__link', function(e) {
  e.preventDefault();
  const href = $(this).attr('href');
  if(href) {
    window.location.href = href;
  } else {
    window.location.href = '/';
  }
});
