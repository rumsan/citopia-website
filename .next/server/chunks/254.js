"use strict";
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/layouts/Dark.jsx

/* eslint-disable @next/next/no-css-tags */ 

const DarkTheme = ({ children , useSkin , mobileappstyle  })=>{
    external_react_default().useEffect(()=>{
        window.theme = "dark";
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/dark.css"
                    }),
                    useSkin ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/arch-skin-dark.css"
                    }) : "",
                    mobileappstyle ? /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/css/mobile-app-dark.css",
                        rel: "stylesheet"
                    }) : ""
                ]
            }),
            children
        ]
    }));
};
/* harmony default export */ const Dark = (DarkTheme);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(806);
;// CONCATENATED MODULE: ./src/common/getSiblings.js
const getSiblings = (e)=>{
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
/* harmony default export */ const common_getSiblings = (getSiblings);

;// CONCATENATED MODULE: ./src/common/navbar.js

const handleDropdown = (e)=>{
    common_getSiblings(e.target.parentElement).filter((item)=>item.classList.contains("show")
    ).map((item)=>{
        item.classList.remove("show");
        if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
            item.childNodes[1].classList.remove("show");
        }
    });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = (e)=>{
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};

;// CONCATENATED MODULE: ./src/components/navbar.jsx

/* eslint-disable @next/next/no-img-element */ 



const NavbarMobileApp = ({ lr , nr , theme  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ref: nr,
        className: `navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "logo",
                        children: theme ? theme === "themeL" ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Citopia"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Citopia"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Citopia"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    onClick: handleMobileDropdown,
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "icon-bar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-bars"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav ml-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "nav-item dropdown",
                                onClick: handleDropdown,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        href: "#",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "About Citopia"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Products"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/mobile-app/services-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Partners"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "nav-item dropdown",
                                onClick: handleDropdown,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        href: "#",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "dropdown-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#blogs",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Blogs"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Articles"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#news",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "dropdown-item",
                                                    children: "Media Mentions"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/mobile-app/pricing-plan-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Demo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "#contact-us",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Contact Us"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const navbar = (NavbarMobileApp);

;// CONCATENATED MODULE: ./src/components/PageBanner.jsx

/* eslint-disable @next/next/no-img-element */ 

const Intro2 = ({ sliderRef  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        ref: sliderRef,
        className: "slider-st valign position-re",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "caption",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-20",
                                        children: "Citopia for Smart City Sustainable Mobility  Privacy & Smart Mobility"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Exploring blockchain solutions for smart cities and human mobility to improve quality of life"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "butons mt-40",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                className: "butn-gr rounded buton",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Apple Store"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 384 512",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                className: "butn-bord-dark rounded buton",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Google Play"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 512 512",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/mobithumbnail.jpeg",
                                alt: ""
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "line bottom left"
            })
        ]
    }));
};
/* harmony default export */ const PageBanner = (Intro2);

;// CONCATENATED MODULE: ./src/components/Split/index.jsx


class Split extends (external_react_default()).Component {
    target = /*#__PURE__*/ external_react_default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const components_Split = (Split);

;// CONCATENATED MODULE: ./src/common/thumparallax.js
const thumparallax = ()=>{
    var imageUp = document.getElementsByClassName("thumparallax");
    if (imageUp) {
        new simpleParallax(imageUp, {
            delay: 1,
            scale: 1.1
        });
    }
};
const thumparallaxDown = ()=>{
    var imageDown = document.getElementsByClassName("thumparallax-down");
    if (imageDown) {
        new simpleParallax(imageDown, {
            orientation: "down",
            delay: 1,
            scale: 1.1
        });
    }
};

;// CONCATENATED MODULE: ./src/components/GetStarted.jsx

/* eslint-disable @next/next/no-img-element */ 



const MinimalArea2 = ()=>{
    external_react_default().useEffect(()=>{
        setTimeout(()=>{
            thumparallaxDown();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "min-area",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "thumparallax-down",
                                src: "/img/min-area.jpg",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "s-head mb-80",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                            className: "stit mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "left"
                                                }),
                                                "Get Started",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "right"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: " Seamless Movement with Citopia"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_Split, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Are you a service provider or user looking for an easier and safer way to travel?"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".2s",
                                            children: "We provide free initial consultation and support."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".4s",
                                            children: "We work with some of the most successful businesses."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/about/about-dark`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "butn bord curve mt-40 wow fadeInUp",
                                        "data-wow-delay": ".8s",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Get Started"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const GetStarted = (MinimalArea2);

;// CONCATENATED MODULE: ./src/components/Features.jsx


const Features = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "app-services section-padding bg-gray",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7 col-md-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "s-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        "Application Features",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: " Features to Customize your Application Easy"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item mb-30",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-tit mb-15",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "pe-7s-network"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-tit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Blockchain/ZK Proof"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item mb-30",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-tit mb-15",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "pe-7s-lock"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-tit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "PII Preservation"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item mb-30",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-tit mb-15",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "pe-7s-safe"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-tit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Privacy"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item sm-mb50",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-tit mb-15",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "pe-7s-server"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-tit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Data Preservation"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item sm-mb50",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-tit mb-15",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "pe-7s-phone"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-tit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Easy Onboarding"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item-tit mb-15",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "pe-7s-copy-file"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-tit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Digital Twin"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam."
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Features = (Features);

// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(485);
;// CONCATENATED MODULE: ./src/components/HowItWorks.jsx




const VideoWithTeam = ()=>{
    const [isOpen, setOpen] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        console.clear();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "team-vid app-process section-padding bg-dark pt-50",
        "data-overlay-dark": "0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row mb-20",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "vid-img bg-img",
                                style: {
                                    backgroundImage: 'url(/img/citopia.jpeg)'
                                },
                                "data-overlay-dark": "2",
                                children: [
                                     false && /*#__PURE__*/ 0,
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.youtube.com/watch?v=lcNDWc2jNu8",
                                        className: "vid valign",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setOpen(true);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 384 512",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-7 col-md-10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "s-head text-center mb-80",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                        className: "stit mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "left"
                                            }),
                                            " Working Process",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "right"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "3 Step For User"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item text-center md-mb50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon pe-7s-cloud-download"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Download Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "step-number",
                                            children: "Step 01"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item text-center md-mb50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon pe-7s-user"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Create Account"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "step-number",
                                            children: "Step 02"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon pe-7s-phone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Got Results"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "step-number",
                                            children: "Step 03"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-7 col-md-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "s-head text-center mt-80 mb-80",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "3 Steps For Service Provider"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item text-center md-mb50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon pe-7s-cloud-download"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Download Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "step-number",
                                            children: "Step 01"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item text-center md-mb50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon pe-7s-user"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Create Account"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "step-number",
                                            children: "Step 02"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon pe-7s-phone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Got Results"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "step-number",
                                            children: "Step 03"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-blur"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-blur two"
            })
        ]
    }));
};
/* harmony default export */ const HowItWorks = (VideoWithTeam);

;// CONCATENATED MODULE: ./src/common/cardMouseEffect.js

const cardMouseEffect = (featureEl)=>{
    var featuresitems = featureEl;
    if (featuresitems) {
        featuresitems.forEach((item)=>{
            item.onmouseover = function(event) {
                item.classList.add("active");
                let siblings = common_getSiblings(item), siblingEl = siblings.map((e)=>e.classList.remove("active")
                );
            };
        });
    }
};
/* harmony default export */ const common_cardMouseEffect = (cardMouseEffect);

;// CONCATENATED MODULE: ./src/components/UseCases.jsx




const UseCases = ()=>{
    external_react_default().useEffect(()=>{
        common_cardMouseEffect(document.querySelectorAll(".feat .items"));
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "feat sub-bg section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12 col-md-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "s-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        "Use Cases",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: " Features to Customize your Application Easy"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 items md-mb30",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "ion-ios-monitor"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "vinTRAK"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Citopia vinTRAK will securely verify vehicle location using decentralized identities and zero-knowledge proofs, without manual verification."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "more-stroke",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 items active md-mb30",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "ion-ios-bolt-outline"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "MaaS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Citopia MaaS acts as the trust anchor for identity management using blockchain, DIDs,  Zero Knowledge Proof technology  to ensure that the sovereign identities."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "more-stroke",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 items sm-mb30",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "ion-cube"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "partsTRAK"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Citopia partsTRAK will act as the platform for participants to issue vehicle identity, battery identity, and location-related VCs."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "more-stroke",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_UseCases = (UseCases);

;// CONCATENATED MODULE: ./src/components/Blogs.jsx



const Blogs = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "blog-grid section-padding position-re",
        id: "blogs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 col-md-10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "s-head text-center mb-80",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                        className: "stit mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "left"
                                            }),
                                            "Recent Articles",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "right"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: " From Our Blogs"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item bg-img",
                                    style: {
                                        backgroundImage: "url(/img/blog/1.jpg)"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/blog/blog-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "date",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                children: "06"
                                                            }),
                                                            " Aug 2022"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        className: "author",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "by / Admin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog/blog-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "btn-more",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".6s",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item active bg-img",
                                    style: {
                                        backgroundImage: "url(/img/blog/2.jpg)"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/blog/blog-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "date",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                children: "06"
                                                            }),
                                                            " Aug 2022"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        className: "author",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "by / Admin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog/blog-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "btn-more",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 wow fadeInUp",
                                "data-wow-delay": ".9s",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item bg-img",
                                    style: {
                                        backgroundImage: "url(/img/blog/3.jpg)"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/blog/blog-dark",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "date",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                children: "06"
                                                            }),
                                                            " Aug 2022"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        className: "author",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "by / Admin"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog/blog-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "btn-more",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details/blog-details-dark",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "line top right"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "line bottom left"
            })
        ]
    }));
};
/* harmony default export */ const components_Blogs = (Blogs);

;// CONCATENATED MODULE: ./src/components/News.jsx

/* eslint-disable @next/next/no-img-element */ 

const News = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-list section-padding sub-bg",
        id: "news",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "head md-mb50",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        "Get The Latest News",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "What Our Trending News."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We provide company and finance service for startups and company business."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/blog/blog-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "More Blog Posts"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-7 offset-lg-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/blog/1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cont valign",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/blog/blog-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "date",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            children: "06"
                                                                        }),
                                                                        " August"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/blog/blog-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "tag",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "WordPress"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog-details/blog-details-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "How to use solid color combine with simple furnitures."
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/blog/2.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cont valign",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/blog/blog-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "date",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            children: "06"
                                                                        }),
                                                                        " August"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/blog/blog-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "tag",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "WordPress"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog-details/blog-details-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "How to use solid color combine with simple furnitures."
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/blog/3.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "cont valign",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/blog/blog-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "date",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            children: "06"
                                                                        }),
                                                                        " August"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "/blog/blog-dark",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "tag",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: "WordPress"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog-details/blog-details-dark",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "How to use solid color combine with simple furnitures."
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_News = (News);

;// CONCATENATED MODULE: ./src/components/OurStories.jsx



const OurStories = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "serv-arch section-padding ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "s-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        "Our Stories",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "How Citopia Came To Be"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg col-md-6 item bg-img",
                            style: {
                                backgroundImage: "url(/img/arch/s2.jpg)"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "numb",
                                    children: "01"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Architecture"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/about/about-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "custom-font more main-color",
                                        children: "Read More"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg col-md-6 item bg-img",
                            style: {
                                backgroundImage: "url(/img/arch/s1.jpg)"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "numb",
                                    children: "02"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "Interior Design"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/about/about-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "custom-font more main-color",
                                        children: "Read More"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg col-md-6 item bg-img",
                            style: {
                                backgroundImage: "url(/img/arch/s3.jpg)"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "numb",
                                    children: "03"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "3D Modeling"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We provide all equipment and services, etc and ensure a safe and secure project site."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/about/about-dark",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "custom-font more main-color",
                                        children: "Read More"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_OurStories = (OurStories);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(296);
;// CONCATENATED MODULE: ./src/components/ContactUs.jsx



const ContactForm = ({ noLine  })=>{
    const messageRef = external_react_default().useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "contact-sec pt-50 pb-50 position-re",
        id: "contact-us",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 col-md-10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sec-head text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "wow color-font",
                                        children: "Seamless Journey With Privacy."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "wow fadeIn",
                                        "data-wow-delay": ".5s",
                                        children: "Contact us to learn more about how Citopia is changing the world of mobility."
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "form wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
                                    initialValues: {
                                        name: "",
                                        email: "",
                                        message: ""
                                    },
                                    onSubmit: async (values)=>{
                                        await sendMessage(500);
                                        alert(JSON.stringify(values, null, 2));
                                        // show message
                                        messageRef.current.innerText = "Your Message has been successfully sent. I will contact you soon.";
                                        // Reset the values
                                        values.name = "";
                                        values.email = "";
                                        values.message = "";
                                        // clear message
                                        setTimeout(()=>{
                                            messageRef.current.innerText = "";
                                        }, 2000);
                                    },
                                    children: ({ errors , touched  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                                            id: "contact-form",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "messages",
                                                    ref: messageRef
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "controls",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                        id: "form_name",
                                                                        type: "text",
                                                                        name: "name",
                                                                        placeholder: "Name",
                                                                        required: "required"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-lg-6",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "form-group",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                            validate: validateEmail,
                                                                            id: "form_email",
                                                                            type: "email",
                                                                            name: "email",
                                                                            placeholder: "Email",
                                                                            required: "required"
                                                                        }),
                                                                        errors.email && touched.email && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            children: errors.email
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Field, {
                                                                        as: "textarea",
                                                                        id: "form_message",
                                                                        name: "message",
                                                                        placeholder: "Message",
                                                                        rows: "4",
                                                                        required: "required"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "col-12",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text-center",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                        type: "submit",
                                                                        className: "nb butn bord curve mt-30",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Send Massege"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                })
                            })
                        })
                    })
                ]
            }),
            !noLine ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "line bottom left"
            }) : ""
        ]
    }));
};
/* harmony default export */ const ContactUs = (ContactForm);

;// CONCATENATED MODULE: ./src/components/Footer.jsx


const Footer2 = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "app-footer",
        "data-overlay-dark": "0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item-clumn our md-mb50",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "logo-brand mb-50",
                                            children: "Citopia"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Sed ut perspiciatis undmnis iste natus error sit voluptatem accusantium dolore udantiuy totam rem aperiam."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item-clumn links md-mb50",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title",
                                        children: "Navigation"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon pe-7s-angle-right"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        children: "Home"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon pe-7s-angle-right"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        children: "About Us"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon pe-7s-angle-right"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        children: "Partners"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon pe-7s-angle-right"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        children: "Resources"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon pe-7s-angle-right"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        children: "Demo"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item-clumn links",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "title mb-30",
                                        children: "Contact"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Email Address"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: "support@gmail.com"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "social mt-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sub-footer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "\xa9 2022 Citopia. All Rights Reserved"
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-blur"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-blur two"
            })
        ]
    }));
};
/* harmony default export */ const Footer = (Footer2);

;// CONCATENATED MODULE: ./src/pages/homepage.jsx

/* eslint-disable @next/next/no-page-custom-font */ 













const MobileAppDark = ()=>{
    const navbarRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dark, {
                mobileappstyle: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {
                        nr: navbarRef
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PageBanner, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GetStarted, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HowItWorks, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_UseCases, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Features, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Blogs, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_News, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_OurStories, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactUs, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const homepage = (MobileAppDark);


/***/ }),

/***/ 806:
/***/ ((module) => {

module.exports = {"QP":true};

/***/ })

};
;