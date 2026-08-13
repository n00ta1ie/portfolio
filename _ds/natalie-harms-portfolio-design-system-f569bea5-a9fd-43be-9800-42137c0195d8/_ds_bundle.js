/* @ds-bundle: {"format":3,"namespace":"NatalieHarmsPortfolioDesignSystem_f569be","components":[{"name":"Charm","sourcePath":"components/brand/Charm.jsx"},{"name":"Sparkle","sourcePath":"components/brand/Sparkle.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Avatar","sourcePath":"components/surfaces/Avatar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/brand/Charm.jsx":"d7ec2d862623","components/brand/Sparkle.jsx":"8876ce29a88b","components/core/Badge.jsx":"eda31cf006dd","components/core/Button.jsx":"fd3f6268279e","components/core/IconButton.jsx":"be0c93119257","components/core/Tag.jsx":"4e3a87594815","components/surfaces/Avatar.jsx":"64a5b68e237d","components/surfaces/Card.jsx":"facade4f7f95","ui_kits/portfolio/Contact.jsx":"2a39ed046dbd","ui_kits/portfolio/FeaturedWork.jsx":"b2d99d10af1a","ui_kits/portfolio/Hero.jsx":"2f91df5fe0f7","ui_kits/portfolio/NavBar.jsx":"2ae6a446cc79","ui_kits/portfolio/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NatalieHarmsPortfolioDesignSystem_f569be = window.NatalieHarmsPortfolioDesignSystem_f569be || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Charm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Charm — a floating 3D chrome/character PNG sticker (cross, chain, heart,
 * bow, bunny, seal…). The brand's signature decoration. Drops a soft black
 * shadow; can drift on a slow float loop and carry a pink glow halo.
 *
 * Pass `src` (an image url from assets/charms or assets/characters). The image
 * itself is the art — never redraw these as SVG.
 */
function Charm({
  src,
  size = 96,
  rotate = 0,
  float = true,
  glow = false,
  delay = 0,
  duration = 6,
  alt = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      lineHeight: 0,
      // custom prop feeds the keyframe so float preserves rotation
      ['--charm-rot']: `${rotate}deg`,
      animation: float ? `nh-float ${duration}s var(--ease-in-out) ${delay}s infinite` : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    draggable: false,
    style: {
      width: `${size}px`,
      height: 'auto',
      transform: float ? 'none' : `rotate(${rotate}deg)`,
      filter: glow ? 'drop-shadow(0 10px 24px rgba(0,0,0,0.55)) drop-shadow(0 0 22px var(--pink-glow))' : 'drop-shadow(0 10px 24px rgba(0,0,0,0.55)) drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
      userSelect: 'none',
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Charm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Charm.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sparkle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sparkle — a small 4-point sparkle/star accent. Pure CSS shape (acceptable
 * brand decoration, not iconography). Twinkles by default. Sprinkle near
 * charms and headlines.
 */
function Sparkle({
  size = 18,
  color = 'var(--paper)',
  twinkle = true,
  delay = 0,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: `${size}px`,
      height: `${size}px`,
      background: color,
      // 4-point sparkle via a curved star mask
      clipPath: 'polygon(50% 0%, 58% 42%, 100% 50%, 58% 58%, 50% 100%, 42% 58%, 0% 50%, 42% 42%)',
      filter: 'drop-shadow(0 0 6px var(--pink-glow))',
      animation: twinkle ? `nh-twinkle 2.4s var(--ease-in-out) ${delay}s infinite` : 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Sparkle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sparkle.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — tiny status/count marker. Smaller and louder than a Tag.
 * `tone`: 'accent' (pink), 'dot' (just a glowing pink dot + label), 'neutral'.
 */
function Badge({
  tone = 'accent',
  dot = false,
  style = {},
  children,
  ...rest
}) {
  if (dot) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-light)',
        fontSize: 'var(--text-micro)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: 'var(--pink-400)',
        boxShadow: '0 0 8px var(--pink-glow)'
      }
    }), children);
  }
  const tones = {
    accent: {
      background: 'var(--pink-400)',
      color: 'var(--ink-900)'
    },
    neutral: {
      background: 'var(--surface-raised)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-hairline)'
    },
    white: {
      background: 'var(--paper)',
      color: 'var(--ink-900)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '18px',
      height: '18px',
      padding: '0 6px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      fontSize: '10px',
      letterSpacing: '0.04em',
      lineHeight: 1,
      ...(tones[tone] || tones.accent),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the brand's primary action control.
 * Full-capsule. Four looks: ghost (hairline outline, the default site pill),
 * primary (white), accent (pink), chrome (liquid-metal). Hover lifts toward
 * pink + glow; press shrinks slightly.
 */
function Button({
  variant = 'ghost',
  size = 'md',
  disabled = false,
  icon = null,
  iconRight = null,
  href,
  onClick,
  type = 'button',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    sm: {
      h: 'var(--control-sm)',
      px: '14px',
      fs: 'var(--text-label)'
    },
    md: {
      h: 'var(--control-md)',
      px: '20px',
      fs: 'var(--text-body-sm)'
    },
    lg: {
      h: 'var(--control-lg)',
      px: '28px',
      fs: 'var(--text-body)'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: s.h,
    padding: `0 ${s.px}`,
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-light)',
    fontSize: s.fs,
    letterSpacing: '0.02em',
    lineHeight: 1,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    transition: 'transform var(--dur-fast) var(--ease-spring), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
    transform: press ? 'scale(0.97)' : hover && !disabled ? 'scale(1.02)' : 'scale(1)',
    opacity: disabled ? 0.4 : 1,
    userSelect: 'none'
  };
  const looks = {
    ghost: {
      background: hover && !disabled ? 'var(--white-08)' : 'transparent',
      color: 'var(--text-primary)',
      borderColor: hover && !disabled ? 'var(--border-accent)' : 'var(--border-strong)',
      boxShadow: hover && !disabled ? 'var(--glow-sm)' : 'none'
    },
    primary: {
      background: hover && !disabled ? 'var(--ink-100)' : 'var(--paper)',
      color: 'var(--ink-900)',
      borderColor: 'transparent',
      boxShadow: hover && !disabled ? 'var(--glow-md)' : 'var(--shadow-sm)'
    },
    accent: {
      background: hover && !disabled ? 'var(--pink-500)' : 'var(--pink-400)',
      color: 'var(--ink-900)',
      borderColor: 'transparent',
      boxShadow: hover && !disabled ? 'var(--glow-md)' : 'none'
    },
    chrome: {
      background: 'var(--chrome-grad)',
      color: 'var(--ink-900)',
      borderColor: 'var(--white-30)',
      boxShadow: hover && !disabled ? 'var(--glow-sm), var(--shadow-md)' : 'var(--shadow-sm)',
      fontWeight: 'var(--fw-medium)'
    }
  };
  const props = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...(looks[variant] || looks.ghost),
      ...style
    },
    ...rest
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      onClick: onClick
    }, props), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick
  }, props), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * IconButton — circular hairline button for UI chrome (close, menu, arrows,
 * social). Pass a Lucide (or any) icon node as children. Hover halos pink.
 */
function IconButton({
  size = 'md',
  variant = 'ghost',
  label,
  onClick,
  href,
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const looks = {
    ghost: {
      background: hover ? 'var(--white-08)' : 'var(--white-04)',
      color: 'var(--text-primary)',
      border: `1px solid ${hover ? 'var(--border-accent)' : 'var(--border-hairline)'}`,
      boxShadow: hover ? 'var(--glow-sm)' : 'none'
    },
    solid: {
      background: hover ? 'var(--surface-raised)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-hairline)',
      boxShadow: hover ? 'var(--glow-sm)' : 'var(--shadow-sm)'
    },
    accent: {
      background: hover ? 'var(--pink-500)' : 'var(--pink-400)',
      color: 'var(--ink-900)',
      border: '1px solid transparent',
      boxShadow: hover ? 'var(--glow-md)' : 'none'
    }
  };
  const Comp = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    onClick: onClick,
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${d}px`,
      height: `${d}px`,
      borderRadius: '50%',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'transform var(--dur-fast) var(--ease-spring), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      transform: press ? 'scale(0.94)' : hover ? 'scale(1.06)' : 'scale(1)',
      ...(looks[variant] || looks.ghost),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small static capsule label (e.g. discipline chips: "motion design",
 * "3D design"). Non-interactive by default. `tone`: 'outline' (hairline),
 * 'solid' (dark fill), 'accent' (pink wash), 'chrome'.
 */
function Tag({
  tone = 'outline',
  size = 'md',
  icon = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      h: '24px',
      px: '10px',
      fs: 'var(--text-micro)'
    },
    md: {
      h: '30px',
      px: '14px',
      fs: 'var(--text-label)'
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    outline: {
      background: 'var(--white-04)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-hairline)'
    },
    solid: {
      background: 'var(--surface-raised)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-hairline)'
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--pink-300)',
      border: '1px solid var(--pink-glow)'
    },
    chrome: {
      background: 'var(--chrome-grad-soft)',
      color: 'var(--ink-900)',
      border: '1px solid var(--white-30)',
      fontWeight: 'var(--fw-medium)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: s.h,
      padding: `0 ${s.px}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: s.fs,
      letterSpacing: '0.03em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...(tones[tone] || tones.outline),
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1em'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular character/profile image with a hairline ring. Optional
 * pink glow ring and a status dot (e.g. "available"). Use the 3D character
 * renders or any portrait.
 */
function Avatar({
  src,
  size = 56,
  alt = '',
  ring = true,
  glow = false,
  status = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-block',
      width: `${size}px`,
      height: `${size}px`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--surface-raised)',
      border: ring ? '1.5px solid var(--border-strong)' : 'none',
      boxShadow: glow ? '0 0 0 3px var(--pink-glow-soft), var(--glow-md)' : 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '-1px',
      bottom: '-1px',
      width: `${Math.max(10, size * 0.22)}px`,
      height: `${Math.max(10, size * 0.22)}px`,
      borderRadius: '50%',
      background: 'var(--pink-400)',
      border: '2px solid var(--bg-page)',
      boxShadow: '0 0 8px var(--pink-glow)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Card — dark raised surface with a hairline white border, generous radius,
 * soft black shadow. Two modes:
 *  - default: a content container (pass children).
 *  - media:   a portfolio "work" card (pass `media` image src + `title`/`meta`).
 * `interactive` adds hover lift + pink glow/border (use for clickable cards).
 */
function Card({
  media,
  title,
  meta,
  tag,
  interactive = false,
  href,
  onClick,
  padding = 'var(--space-5)',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const isMedia = !!media;
  const clickable = interactive || !!href || !!onClick;
  const wrap = {
    position: 'relative',
    display: 'block',
    background: 'var(--surface-card)',
    border: `1px solid ${hover && clickable ? 'var(--border-accent)' : 'var(--border-hairline)'}`,
    borderRadius: 'var(--radius-lg)',
    boxShadow: hover && clickable ? 'var(--glow-md), var(--shadow-lg)' : 'var(--shadow-md)',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'transform var(--dur-base) var(--ease-spring), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    transform: hover && clickable ? 'translateY(-4px)' : 'none',
    ...style
  };
  const hoverProps = clickable ? {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  } : {};
  const Comp = href ? 'a' : 'div';
  const mediaBlock = isMedia && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      transform: hover && clickable ? 'scale(1.04)' : 'scale(1)'
    }
  }), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px',
      display: 'inline-flex',
      alignItems: 'center',
      height: '26px',
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--black-60)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      border: '1px solid var(--white-18)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--text-micro)',
      letterSpacing: '0.04em'
    }
  }, tag));
  const caption = isMedia && (title || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-primary)',
      lineHeight: 1.05
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      letterSpacing: '0.02em'
    }
  }, meta));
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    onClick: onClick,
    style: wrap
  }, hoverProps, rest), mediaBlock, caption, children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isMedia ? '0 var(--space-5) var(--space-5)' : padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Contact — big pixel "let's talk" with charms and the three social CTAs. */
function Contact() {
  const DS = window.NatalieHarmsPortfolioDesignSystem_f569be;
  const {
    Button,
    Charm,
    Sparkle
  } = DS;
  const A = n => '../../assets/charms/' + n;
  const C = n => '../../assets/characters/' + n;
  const I = n => '../../assets/icons/' + n;
  const ChromeIco = ({
    n
  }) => /*#__PURE__*/React.createElement("img", {
    src: I(n),
    alt: "",
    style: {
      height: '22px',
      width: 'auto',
      display: 'block',
      filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.5))'
    }
  });
  const mail = /*#__PURE__*/React.createElement(ChromeIco, {
    n: "email.png"
  });
  const linkedin = /*#__PURE__*/React.createElement(ChromeIco, {
    n: "linkedin.png"
  });
  const insta = /*#__PURE__*/React.createElement(ChromeIco, {
    n: "instagram.png"
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '72px clamp(20px,5vw,56px) 88px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(45% 60% at 50% 60%, rgba(237,187,255,0.18), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '760px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 100,
      fontSize: '17px',
      color: 'var(--text-secondary)'
    }
  }, "got a project, collab, or just wanna say hi?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '18px',
      margin: '6px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '-86px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Charm, {
    src: A('chrome-cross.png'),
    size: 84,
    rotate: -10
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(56px,9vw,120px)',
      lineHeight: 0.95,
      color: 'var(--text-primary)'
    }
  }, "let's talk"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '-78px',
      top: '46%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(Charm, {
    src: C('bunny.png'),
    size: 84,
    float: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '-30px',
      top: '-10px'
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '-20px',
      bottom: '-8px'
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: 16,
    color: "var(--pink-400)",
    delay: 0.6
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    icon: mail,
    href: "mailto:hi@natalieharms.com"
  }, "email"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    icon: linkedin,
    href: "#"
  }, "linkedin"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    icon: insta,
    href: "#"
  }, "instagram"))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/FeaturedWork.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FeaturedWork — editorial, near-full-bleed: "featured work" flush-left, then a
   2-column grid of large work tiles running almost to the page edges. Tiles use
   the brand's own 3D renders as stand-in imagery (no invented client work). */
function FeaturedWork() {
  const DS = window.NatalieHarmsPortfolioDesignSystem_f569be;
  const {
    Tag,
    Button
  } = DS;
  const A = n => '../../assets/charms/' + n;
  const C = n => '../../assets/characters/' + n;
  const items = [{
    no: '01',
    tag: 'motion',
    title: "motion reel '26",
    meta: 'after effects · cinema 4d',
    img: A('chrome-chain-horizontal.png'),
    tint: 'rgba(237,187,255,0.16)'
  }, {
    no: '02',
    tag: '3d',
    title: 'chrome studies',
    meta: 'blender · octane',
    img: A('chrome-cross.png'),
    tint: 'rgba(255,255,255,0.10)'
  }, {
    no: '03',
    tag: 'graphic',
    title: 'poster series',
    meta: 'type · layout',
    img: A('bow-pink.png'),
    tint: 'rgba(231,156,203,0.18)'
  }, {
    no: '04',
    tag: 'ui',
    title: 'app concepts',
    meta: 'product · interaction',
    img: C('seal.png'),
    tint: 'rgba(237,187,255,0.12)'
  }];
  function Tile({
    no,
    tag,
    title,
    meta,
    img,
    tint
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        aspectRatio: '16 / 9',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid ' + (h ? 'var(--border-accent)' : 'var(--border-hairline)'),
        boxShadow: h ? 'var(--glow-md), var(--shadow-lg)' : 'var(--shadow-md)',
        background: 'radial-gradient(70% 90% at 50% 38%, ' + tint + ', transparent 70%), var(--surface-sunken)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '16px',
        left: '18px',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: '20px',
        color: 'var(--text-muted)'
      }
    }, no), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: '15px',
        right: '16px'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      tone: "chrome",
      size: "sm"
    }, tag)), /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "",
      style: {
        maxWidth: '34%',
        maxHeight: '60%',
        filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.6))',
        transform: h ? 'scale(1.06) rotate(-2deg)' : 'scale(1)',
        transition: 'transform var(--dur-slow) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '14px 4px 0',
        borderTop: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: 'clamp(24px,2.4vw,34px)',
        color: h ? 'var(--text-accent)' : 'var(--text-primary)',
        lineHeight: 1,
        transition: 'color var(--dur-base) var(--ease-out)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        fontFamily: 'var(--font-body)',
        fontWeight: 100,
        fontSize: 'clamp(12px,1.1vw,15px)',
        color: 'var(--text-muted)',
        letterSpacing: '0.04em',
        textAlign: 'right'
      }
    }, meta)));
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      padding: '56px clamp(16px,3vw,40px) 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'clamp(36px,5.5vw,64px)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "featured work"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 100,
      fontSize: '13px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "selected \xB7 2024\u201426")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'clamp(16px,2.4vw,32px)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Tile, _extends({
    key: it.no
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 'clamp(22px,2.6vw,34px)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    href: "projects.html",
    iconRight: /*#__PURE__*/React.createElement("svg", {
      width: "17",
      height: "17",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))
  }, "more projects")));
}
Object.assign(window, {
  FeaturedWork
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/FeaturedWork.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — a close replica of Natalie's reference comp: the designed bitmap
   wordmark splits around the centered 3D avatar, with the chrome charms,
   bows, characters, white star-bursts and sparkles placed to match the
   reference. Three expressive host controls layer on top:
     • Mood   — soft / chrome / dreamy (palette + emphasis + glow)
     • Chaos  — reference layout → maximal overlapping scrapbook
     • Energy — calm (still) / lively (drift + twinkle)
*/
const HERO_MOODS = {
  soft: {
    label: 'soft',
    accent: '#ffc4e3',
    glow: 0.16,
    cute: 1.18,
    metal: 0.84,
    spark: 'soft'
  },
  chrome: {
    label: 'chrome',
    accent: '#cdd2e8',
    glow: 0.10,
    cute: 0.85,
    metal: 1.16,
    spark: 'few'
  },
  dreamy: {
    label: 'dreamy',
    accent: '#edbbff',
    glow: 0.24,
    cute: 1.0,
    metal: 1.0,
    spark: 'many'
  }
};
function Hero({
  t = {}
}) {
  const DS = window.NatalieHarmsPortfolioDesignSystem_f569be;
  const {
    Tag,
    Charm,
    Sparkle
  } = DS;
  const taglines = ["i'm a designer!", 'i make things move', 'chrome & cute'];
  const [i, setI] = React.useState(0);
  const A = n => '../../assets/charms/' + n;
  const C = n => '../../assets/characters/' + n;
  const W = n => '../../assets/brand/' + n;
  const I = n => '../../assets/icons/' + n;
  const useArt = (t.header ?? 'artwork') === 'artwork';
  const mood = HERO_MOODS[t.mood] || HERO_MOODS.dreamy;
  const chaos = t.chaos ?? 0.3;
  const lively = (t.energy ?? 'lively') === 'lively';
  const k = 1.0 + chaos * 0.5; // 1.0 (reference) → 1.5 (maximal)
  const showChaos = chaos > 0.45; // reveal the extra overlapping pile
  const rotK = 0.7 + chaos * 0.8;
  const emph = cat => cat === 'cute' ? mood.cute : mood.metal;
  const hexA = (hex, a) => {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${a})`;
  };
  const heroGlow = hexA(mood.accent, mood.glow);

  // white 8-point star burst at 50% opacity (matches the reference)
  const Star = ({
    size,
    left,
    top,
    z = 5,
    rot = 0,
    delay = 0
  }) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: left + '%',
      top: top + '%',
      zIndex: z,
      width: size + 'px',
      height: size + 'px',
      background: 'rgba(255,255,255,0.5)',
      clipPath: 'polygon(50% 0%, 55.43% 29.71%, 75% 6.7%, 64.85% 35.15%, 93.3% 25%, 70.28% 44.57%, 100% 50%, 70.28% 55.43%, 93.3% 75%, 64.85% 64.85%, 75% 93.3%, 55.43% 70.28%, 50% 100%, 44.57% 70.28%, 25% 93.3%, 35.15% 64.85%, 6.7% 75%, 29.72% 55.43%, 0% 50%, 29.72% 44.57%, 6.7% 25%, 35.15% 35.15%, 25% 6.7%, 44.57% 29.72%)',
      transform: 'rotate(' + rot + 'deg)',
      animation: lively ? 'nh-float ' + (5 + delay) + 's var(--ease-in-out) ' + delay + 's infinite' : 'none'
    }
  });
  const NameWord = ({
    cap,
    rest,
    align
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      lineHeight: 0.86,
      whiteSpace: 'nowrap',
      fontSize: 'clamp(46px, 8.4vw, 124px)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '1.42em',
      verticalAlign: '-0.16em',
      marginRight: '-0.04em'
    }
  }, cap), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic'
    }
  }, rest));

  // {src, base, x, y, rot, z, d, glow, cat, char, chaosOnly}  — base layout matches the reference
  const charms = [
  // left cluster
  {
    src: A('chrome-cross.png'),
    base: 106,
    x: 15,
    y: 43,
    rot: -11,
    z: 3,
    d: 0.2,
    cat: 'metal'
  }, {
    src: C('bunny.png'),
    base: 128,
    x: 7.5,
    y: 52,
    rot: 0,
    z: 3,
    d: 0,
    cat: 'cute',
    char: true
  }, {
    src: A('bow-white.png'),
    base: 154,
    x: 21,
    y: 46,
    rot: -6,
    z: 4,
    d: 0.6,
    cat: 'cute'
  }, {
    src: A('chrome-heart.png'),
    base: 80,
    x: 2.5,
    y: 70,
    rot: 10,
    z: 3,
    d: 1.4,
    glow: true,
    cat: 'metal'
  }, {
    src: A('chrome-chain-vertical.png'),
    base: 100,
    x: 14,
    y: 67,
    rot: 8,
    z: 3,
    d: 1.1,
    cat: 'metal'
  }, {
    src: A('chrome-chain-2.png'),
    base: 158,
    x: 25,
    y: 53,
    rot: -32,
    z: 6,
    d: 0.3,
    cat: 'metal'
  },
  // right cluster
  {
    src: A('chrome-chain-1.png'),
    base: 88,
    x: 80.5,
    y: 48,
    rot: -8,
    z: 3,
    d: 0.4,
    cat: 'metal'
  }, {
    src: A('chrome-heart.png'),
    base: 80,
    x: 87,
    y: 48,
    rot: 14,
    z: 3,
    d: 0.9,
    cat: 'metal'
  }, {
    src: C('seal.png'),
    base: 142,
    x: 71,
    y: 64,
    rot: 2,
    z: 6,
    d: 0,
    cat: 'cute',
    char: true
  }, {
    src: A('chrome-cross.png'),
    base: 110,
    x: 87,
    y: 69,
    rot: 14,
    z: 3,
    d: 0.7,
    cat: 'metal'
  },
  // chaos-only big overlappers (hidden until Chaos is raised)
  {
    src: A('chrome-cross.png'),
    base: 168,
    x: 31,
    y: 6,
    rot: -9,
    z: 1,
    d: 0.5,
    cat: 'metal',
    chaosOnly: true
  }, {
    src: A('chrome-chain-2.png'),
    base: 132,
    x: 29,
    y: 62,
    rot: -18,
    z: 6,
    d: 0.3,
    cat: 'metal',
    chaosOnly: true
  }, {
    src: A('bow-pink.png'),
    base: 124,
    x: 58,
    y: 64,
    rot: 12,
    z: 6,
    d: 0.2,
    cat: 'cute',
    chaosOnly: true
  }, {
    src: A('chrome-heart.png'),
    base: 90,
    x: 64,
    y: 30,
    rot: -10,
    z: 6,
    d: 1.0,
    glow: true,
    cat: 'metal',
    chaosOnly: true
  }, {
    src: C('bunny.png'),
    base: 86,
    x: 66,
    y: 56,
    rot: 0,
    z: 6,
    d: 0,
    cat: 'cute',
    char: true,
    chaosOnly: true
  }, {
    src: A('chrome-cross.png'),
    base: 96,
    x: 26,
    y: 72,
    rot: 6,
    z: 6,
    d: 1.2,
    cat: 'metal',
    chaosOnly: true
  }];
  const stars = [{
    s: 112,
    x: 29,
    y: 78,
    z: 3,
    r: 0,
    d: 0.2
  }, {
    s: 100,
    x: 68,
    y: 54,
    z: 3,
    r: 12,
    d: 0.6
  }, {
    s: 70,
    x: 46,
    y: 11,
    z: 1,
    r: 0,
    d: 0.4,
    chaosOnly: true
  }, {
    s: 60,
    x: 21,
    y: 30,
    z: 5,
    r: 20,
    d: 1.0,
    chaosOnly: true
  }];
  let sparkles = [{
    s: 26,
    x: 32,
    y: 56,
    d: 0
  }, {
    s: 28,
    x: 22,
    y: 86,
    d: 0.7
  }, {
    s: 24,
    x: 85,
    y: 70,
    d: 1.2
  }, {
    s: 30,
    x: 54,
    y: 19,
    d: 0.3,
    chaosOnly: true
  }, {
    s: 22,
    x: 67,
    y: 67,
    d: 0.9,
    pink: true,
    chaosOnly: true
  }, {
    s: 18,
    x: 41,
    y: 9,
    d: 0.5,
    chaosOnly: true
  }];
  if (mood.spark === 'few') sparkles = sparkles.slice(0, 2);
  if (mood.spark === 'soft') sparkles = sparkles.map(sp => ({
    ...sp,
    pink: true
  }));
  const vis = o => showChaos || !o.chaosOnly;
  return /*#__PURE__*/React.createElement("header", {
    id: "about",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '24px clamp(16px,3vw,40px) 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: `radial-gradient(42% 50% at 50% 46%, ${heroGlow}, transparent 70%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '1520px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 'min(720px, 82vh)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '19%',
      left: '34%',
      transform: 'translateX(-50%)',
      zIndex: 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 100,
      fontSize: 'clamp(14px,1.3vw,18px)',
      letterSpacing: '0.05em',
      color: 'var(--text-secondary)'
    }
  }, "hi, i'm"), /*#__PURE__*/React.createElement("img", {
    src: W('wordmark-bitmap.png'),
    alt: "Natalie Harms",
    style: {
      position: 'absolute',
      top: '15%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(95%, 1360px)',
      zIndex: 4,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '40%',
      right: '5%',
      zIndex: 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 100,
      fontSize: 'clamp(16px,1.6vw,21px)',
      color: 'var(--text-secondary)'
    }
  }, taglines[i]), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '11%',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      zIndex: 5,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: C('avatar.png'),
    alt: "Natalie",
    style: {
      height: 'min(800px, 86vh)',
      width: 'auto',
      filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.6))',
      WebkitMaskImage: 'linear-gradient(to bottom, #000 80%, transparent 99%)',
      maskImage: 'linear-gradient(to bottom, #000 80%, transparent 99%)'
    }
  })), charms.filter(vis).map((c, idx) => /*#__PURE__*/React.createElement("div", {
    key: 'c' + idx,
    style: {
      position: 'absolute',
      left: c.x + '%',
      top: c.y + '%',
      zIndex: c.z
    }
  }, /*#__PURE__*/React.createElement(Charm, {
    src: c.src,
    size: Math.round(c.base * k * emph(c.cat)),
    rotate: Math.round(c.rot * rotK),
    delay: c.d,
    glow: c.glow,
    float: c.char ? false : lively
  }))), stars.filter(vis).map((s, idx) => /*#__PURE__*/React.createElement(Star, {
    key: 's' + idx,
    size: Math.round(s.s * k),
    left: s.x,
    top: s.y,
    z: s.z,
    rot: s.r,
    delay: s.d
  })), sparkles.filter(vis).map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: 'sp' + idx,
    style: {
      position: 'absolute',
      left: s.x + '%',
      top: s.y + '%',
      zIndex: 7
    }
  }, /*#__PURE__*/React.createElement(Sparkle, {
    size: Math.round(s.s * k),
    color: s.pink ? 'var(--pink-400)' : 'var(--paper)',
    delay: s.d,
    twinkle: lively
  }))), (t.showTags ?? true) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '2%',
      top: '45%',
      zIndex: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "motion design")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '18%',
      top: '71%',
      zIndex: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "3D design")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '69%',
      top: '45%',
      zIndex: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "graphic design")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '82%',
      top: '59%',
      zIndex: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "ui design")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginTop: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '22px'
    }
  }, [['instagram.png', 'instagram', '#'], ['email.png', 'email', 'mailto:hi@natalieharms.com'], ['linkedin.png', 'linkedin', '#']].map(([ic, label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    "aria-label": label,
    title: label,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      opacity: 0.92,
      transition: 'transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.14)';
      e.currentTarget.style.opacity = '1';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.opacity = '0.92';
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: I(ic),
    alt: label,
    style: {
      height: '30px',
      width: 'auto',
      filter: 'drop-shadow(0 4px 9px rgba(0,0,0,0.55))'
    }
  })))), /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    style: {
      textDecoration: 'none',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 100,
      fontSize: '15px',
      color: 'var(--text-secondary)'
    }
  }, "scroll to discover some of my work!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '22px',
      color: 'var(--text-primary)',
      lineHeight: 1,
      marginTop: '2px',
      animation: lively ? 'nh-float 2.4s var(--ease-in-out) infinite' : 'none'
    }
  }, "\u2193")))));
}
Object.assign(window, {
  Hero,
  HERO_MOODS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/NavBar.jsx
try { (() => {
/* NavBar — sticky translucent top bar: bunny mark + wordmark, nav links. */
function NavBar({
  current = 'home'
}) {
  const DS = window.NatalieHarmsPortfolioDesignSystem_f569be;
  const {
    Avatar
  } = DS;
  const links = [['about', 'about.html'], ['projects', 'projects.html'], ['resume', '#'], ['contact', 'index.html#contact']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px clamp(20px, 5vw, 56px)',
      background: 'rgba(10,10,10,0.55)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/characters/bunny.png",
    size: 38,
    ring: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--text-primary)'
    }
  }, "portfolio 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(18px, 3vw, 44px)'
    }
  }, links.map(([l, href]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '20px',
      textDecoration: 'none',
      letterSpacing: '0.01em',
      color: current === l ? 'var(--pink-400)' : 'var(--text-primary)',
      transition: 'color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pink-400)',
    onMouseLeave: e => e.currentTarget.style.color = current === l ? 'var(--pink-400)' : 'var(--text-primary)'
  }, l))));
}
Object.assign(window, {
  NavBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Charm = __ds_scope.Charm;

__ds_ns.Sparkle = __ds_scope.Sparkle;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

})();
