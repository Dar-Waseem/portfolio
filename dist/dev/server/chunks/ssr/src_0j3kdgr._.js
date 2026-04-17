module.exports = [
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/mode-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeToggle",
    ()=>ModeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ModeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            }, void 0, false, {
                fileName: "[project]/src/components/mode-toggle.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            }, void 0, false, {
                fileName: "[project]/src/components/mode-toggle.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/src/components/mode-toggle.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mode-toggle.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-ssr] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Backdrop, {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Popup, {
                "data-slot": "sheet-content",
                "data-side": side,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "sheet-close",
                        render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-3 right-3",
                            size: "icon-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/sheet.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-0.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base font-medium text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mode$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mode-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const navItems = [
    {
        name: "Home",
        href: "#home"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"]
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
    }
];
function Header() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.6
        },
        className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                        href: "#home",
                        className: "text-xl font-bold tracking-tight",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: "Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-8",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: item.href,
                                className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    y: 0
                                },
                                children: item.name
                            }, item.name, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center space-x-4",
                        children: [
                            socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: link.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-muted-foreground hover:text-foreground transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                }, link.name, false, {
                                    fileName: "[project]/src/components/header.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mode$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeToggle"], {}, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mode$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModeToggle"], {}, void 0, false, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
                                open: isOpen,
                                onOpenChange: setIsOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                                        side: "right",
                                        className: "w-full sm:w-80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between py-4 border-b",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold",
                                                        children: "Menu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col space-y-4 py-8",
                                                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: item.href,
                                                            onClick: ()=>setIsOpen(false),
                                                            className: "text-lg font-medium text-muted-foreground hover:text-foreground transition-colors",
                                                            children: item.name
                                                        }, item.name, false, {
                                                            fileName: "[project]/src/components/header.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto pb-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-4",
                                                        children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: link.href,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                                    className: "h-6 w-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/header.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, link.name, false, {
                                                                fileName: "[project]/src/components/header.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/header.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/header.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$render$2f$useRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/use-render/useRender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", render, ...props }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$use$2d$render$2f$useRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRender"])({
        defaultTagName: "span",
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$merge$2d$props$2f$mergeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
                variant
            }), className)
        }, props),
        render,
        state: {
            slot: "badge",
            variant
        }
    });
}
;
}),
"[project]/src/components/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-ssr] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center pt-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "secondary",
                        className: "mb-4",
                        children: "Available for hire"
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.1
                    },
                    className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6",
                    children: [
                        "Hi, I'm ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-primary",
                            children: "John Doe"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.tsx",
                            lineNumber: 31,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    },
                    className: "text-xl sm:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto",
                    children: "Full Stack Developer & UI/UX Designer"
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.3
                    },
                    className: "text-muted-foreground mb-8 max-w-xl mx-auto",
                    children: "I create beautiful, responsive, and user-friendly web applications using modern technologies. Passionate about clean code and great user experiences."
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.4
                    },
                    className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#projects",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                children: "View My Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                variant: "outline",
                                children: "Get In Touch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.6
                    },
                    className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                        href: "#about",
                        animate: {
                            y: [
                                0,
                                10,
                                0
                            ]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: Infinity
                        },
                        className: "text-muted-foreground hover:text-foreground transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/about.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
"use client";
;
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: "Clean Code",
        description: "Writing maintainable, well-structured code that scales."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "UI/UX Design",
        description: "Creating beautiful and intuitive user interfaces."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Performance",
        description: "Optimizing applications for speed and efficiency."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Responsive",
        description: "Building apps that work seamlessly on all devices."
    }
];
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-24 bg-muted/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold mb-4",
                            children: "About Me"
                        }, void 0, false, {
                            fileName: "[project]/src/components/about.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-2xl mx-auto",
                            children: "I'm a passionate developer with expertise in modern web technologies. I love turning complex problems into simple, beautiful solutions."
                        }, void 0, false, {
                            fileName: "[project]/src/components/about.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/about.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                            className: "h-10 w-10 text-primary mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/about.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-2",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/about.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm",
                                            children: feature.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/about.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/about.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/about.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        }, feature.title, false, {
                            fileName: "[project]/src/components/about.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/about.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/about.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/about.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-ssr] (ecmascript) <export default as GitFork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Projects() {
    const [repos, setRepos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchRepos = async ()=>{
            try {
                const response = await fetch("/api/github?username=facebook&type=repos");
                const data = await response.json();
                setRepos(data.repos || []);
            } catch (error) {
                /* eslint-disable */ console.error(...oo_tx(`1100638076_32_8_32_53_11`, "Error fetching repos:", error));
            } finally{
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold mb-4",
                            children: "Featured Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-2xl mx-auto",
                            children: "Here are some of my recent projects. Each one was built with care and attention to detail."
                        }, void 0, false, {
                            fileName: "[project]/src/components/projects.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/projects.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "animate-pulse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6 h-48"
                            }, void 0, false, {
                                fileName: "[project]/src/components/projects.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/components/projects.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/projects.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: repos.map((repo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "h-full flex flex-col hover:shadow-lg transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold line-clamp-1",
                                                    children: repo.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/projects.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: repo.html_url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-muted-foreground hover:text-foreground transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/projects.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/projects.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/projects.tsx",
                                            lineNumber: 78,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/projects.tsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "flex-1 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-sm mb-4 line-clamp-2 flex-1",
                                                children: repo.description || "No description available"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/projects.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-4",
                                                children: [
                                                    repo.language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        children: repo.language
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/projects.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 25
                                                    }, this),
                                                    repo.topics?.slice(0, 2).map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: topic
                                                        }, topic, false, {
                                                            fileName: "[project]/src/components/projects.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/projects.tsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/projects.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 25
                                                            }, this),
                                                            repo.stargazers_count
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/projects.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/projects.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 25
                                                            }, this),
                                                            repo.forks_count
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/projects.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/projects.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/projects.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/projects.tsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, this)
                        }, repo.id, false, {
                            fileName: "[project]/src/components/projects.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/projects.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/projects.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/projects.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4187(_0x52e140,_0x15844d){var _0x1edd14=_0x1edd();return _0x4187=function(_0x418736,_0x252226){_0x418736=_0x418736-0x1dc;var _0x1c174c=_0x1edd14[_0x418736];return _0x1c174c;},_0x4187(_0x52e140,_0x15844d);}var _0x3890c8=_0x4187;function _0x1edd(){var _0xd02a82=['background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_connectToHostNow','NEGATIVE_INFINITY',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'_getOwnPropertyDescriptor','warn','_p_length','_regExpToString','38gkPcrc',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','funcName','_isSet','hasOwnProperty','unshift','[object\\x20Array]','_maxConnectAttemptCount','ws://','autoExpandMaxDepth','default','stackTraceLimit','\\x20server','_addProperty','origin','reducedLimits','resolveGetters','disabledLog','cappedElements','indexOf','reload','Set','Symbol','_isArray','stack','port','function','resetOnProcessingTimeAverageMs','slice','onerror','_connectAttemptCount','emulator','reducePolicy','_processTreeNodeResult','count','_setNodeExpressionPath','HTMLAllCollection','String','strLength','_WebSocketClass','_addLoadNode','expo','ninjaSuppressConsole','_isUndefined','_connected','_keyStrRegExp','next.js','Number','9jOUldT','_isNegativeZero','_p_name','_ws','substr','import(\\x27url\\x27)','_consoleNinjaAllowedToStart','date','parse','_treeNodePropertiesBeforeFullValue','_setNodeLabel','_blacklistedProperty','Buffer','63865','20667vPUjDv','time','Promise','set','2035290pGkmlm','','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','angular','negativeInfinity','test','resolve','WebSocket','array','parent','bind','host','resetWhenQuietMs','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','process','bigint','136cjwhMD','toString','object','readyState','_inBrowser','send','_attemptToReconnectShortly','_HTMLAllCollection','hostname','_allowedToSend','edge','name','stringify','_setNodeId','elapsed','constructor','182420mjmqKf','_numberRegExp',\"/Users/wasim/.windsurf/extensions/wallabyjs.console-ninja-1.0.525-universal/node_modules\",'type','prototype','astro','pop','expressionsToEvaluate','osName','reduceOnAccumulatedProcessingTimeMs','env','Map','_sendErrorMessage','RegExp','node','[object\\x20Date]','_sortProps','_console_ninja','autoExpandLimit','path','8098092eUysyP','_disposeWebsocket','_isPrimitiveWrapperType','autoExpandPropertyCount','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','perLogpoint','map','_extendedWarning','android','join','rootExpression','_type','_capIfString','nan','_socket','root_exp_id','concat','_console_ninja_session','error','trace','_objectToString','isArray','_ninjaIgnoreNextError','onmessage','fromCharCode','\\x20browser','getWebSocketClass','catch','unknown','versions','_dateToString','_cleanNode','1.0.0','react-native','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','isExpressionToEvaluate','now','then','serialize','toLowerCase','index','hrtime','close','allStrLength','valueOf','ExpoDevice','_p_','_inNextEdge','[object\\x20BigInt]','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','timeStamp','autoExpand','1776421588148','_getOwnPropertySymbols','7574025BLeRlk','sortProps','replace','NEXT_RUNTIME','_connecting','_additionalMetadata','forEach','level','symbol','modules','_Symbol','undefined','[object\\x20Set]','eventReceivedCallback','remix','_setNodeQueryPath','[object\\x20Map]','log','depth','Boolean','dockerizedApp','global','null','args','gateway.docker.internal','_addFunctionsNode','perf_hooks','5058944NenKCb','_hasMapOnItsPath','_setNodeExpandableState','push',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Wasims-MacBook-Pro.local\",\"192.168.29.85\"],'unref','_webSocketErrorDocsLink','','_treeNodePropertiesAfterFullValue','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','Error','number','value','_isMap','defaultLimits','_addObjectProperty','totalStrLength','some','boolean','_WebSocket','autoExpandPreviousObjects','sort','_setNodePermissions','_allowedToConnectOnSend','disabledTrace','console','reduceOnCount','location','10.0.2.2','get','call','_propertyName','length','props','_hasSymbolPropertyOnItsPath','_reconnectTimeout','string','getOwnPropertyDescriptor','import(\\x27path\\x27)','noFunctions','nodeModules','elements','endsWith','POSITIVE_INFINITY','21223450LJhzYJ','expId','_isPrimitiveType','onopen','bound\\x20Promise','message','current','reduceLimits','_getOwnPropertyNames','data','url','_quotedRegExp','hits','match','_property','getOwnPropertySymbols','performance','toUpperCase','capped','includes'];_0x1edd=function(){return _0xd02a82;};return _0x1edd();}(function(_0x593217,_0xb66b98){var _0x477746=_0x4187,_0x4015ef=_0x593217();while(!![]){try{var _0x55fb6d=parseInt(_0x477746(0x254))/0x1*(-parseInt(_0x477746(0x216))/0x2)+parseInt(_0x477746(0x258))/0x3+-parseInt(_0x477746(0x2dd))/0x4+parseInt(_0x477746(0x2c2))/0x5+-parseInt(_0x477746(0x28c))/0x6+-parseInt(_0x477746(0x278))/0x7*(parseInt(_0x477746(0x268))/0x8)+parseInt(_0x477746(0x246))/0x9*(parseInt(_0x477746(0x1fa))/0xa);if(_0x55fb6d===_0xb66b98)break;else _0x4015ef['push'](_0x4015ef['shift']());}catch(_0x3d51fa){_0x4015ef['push'](_0x4015ef['shift']());}}}(_0x1edd,0xd34bd));function z(_0x592fc3,_0x315c78,_0x20b8bb,_0x322b6b,_0x3f5c59,_0x2ff362){var _0x1e9d9b=_0x4187,_0x1f3283,_0x1d630f,_0x518481,_0x138db6;this[_0x1e9d9b(0x2d7)]=_0x592fc3,this[_0x1e9d9b(0x263)]=_0x315c78,this[_0x1e9d9b(0x22f)]=_0x20b8bb,this['nodeModules']=_0x322b6b,this['dockerizedApp']=_0x3f5c59,this['eventReceivedCallback']=_0x2ff362,this[_0x1e9d9b(0x271)]=!0x0,this[_0x1e9d9b(0x1e5)]=!0x0,this[_0x1e9d9b(0x242)]=!0x1,this[_0x1e9d9b(0x2c6)]=!0x1,this[_0x1e9d9b(0x2bb)]=((_0x1d630f=(_0x1f3283=_0x592fc3['process'])==null?void 0x0:_0x1f3283[_0x1e9d9b(0x282)])==null?void 0x0:_0x1d630f['NEXT_RUNTIME'])===_0x1e9d9b(0x272),this[_0x1e9d9b(0x26c)]=!((_0x138db6=(_0x518481=this[_0x1e9d9b(0x2d7)][_0x1e9d9b(0x266)])==null?void 0x0:_0x518481[_0x1e9d9b(0x2a9)])!=null&&_0x138db6[_0x1e9d9b(0x286)])&&!this[_0x1e9d9b(0x2bb)],this[_0x1e9d9b(0x23d)]=null,this['_connectAttemptCount']=0x0,this[_0x1e9d9b(0x21d)]=0x14,this[_0x1e9d9b(0x2e3)]='https://tinyurl.com/37x8b79t',this[_0x1e9d9b(0x284)]=(this['_inBrowser']?_0x1e9d9b(0x2ae):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x1e9d9b(0x2e3)];}z[_0x3890c8(0x27c)][_0x3890c8(0x2a6)]=async function(){var _0x47df01=_0x3890c8,_0x4c9b9c,_0x348789;if(this['_WebSocketClass'])return this[_0x47df01(0x23d)];let _0x5b4a33;if(this[_0x47df01(0x26c)]||this[_0x47df01(0x2bb)])_0x5b4a33=this[_0x47df01(0x2d7)][_0x47df01(0x25f)];else{if((_0x4c9b9c=this['global'][_0x47df01(0x266)])!=null&&_0x4c9b9c['_WebSocket'])_0x5b4a33=(_0x348789=this[_0x47df01(0x2d7)]['process'])==null?void 0x0:_0x348789[_0x47df01(0x1e1)];else try{_0x5b4a33=(await new Function('path',_0x47df01(0x204),_0x47df01(0x1f6),_0x47df01(0x290))(await(0x0,eval)(_0x47df01(0x1f4)),await(0x0,eval)(_0x47df01(0x24b)),this[_0x47df01(0x1f6)]))[_0x47df01(0x220)];}catch{try{_0x5b4a33=require(require(_0x47df01(0x28b))[_0x47df01(0x295)](this[_0x47df01(0x1f6)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x47df01(0x23d)]=_0x5b4a33,_0x5b4a33;},z[_0x3890c8(0x27c)][_0x3890c8(0x20f)]=function(){var _0x1d32f3=_0x3890c8;this[_0x1d32f3(0x2c6)]||this[_0x1d32f3(0x242)]||this[_0x1d32f3(0x234)]>=this[_0x1d32f3(0x21d)]||(this[_0x1d32f3(0x1e5)]=!0x1,this[_0x1d32f3(0x2c6)]=!0x0,this[_0x1d32f3(0x234)]++,this[_0x1d32f3(0x249)]=new Promise((_0x1dfeca,_0x1ed537)=>{var _0x162cdd=_0x1d32f3;this[_0x162cdd(0x2a6)]()[_0x162cdd(0x2b1)](_0x47460b=>{var _0x1fc8dc=_0x162cdd;let _0xe561b2=new _0x47460b(_0x1fc8dc(0x21e)+(!this[_0x1fc8dc(0x26c)]&&this[_0x1fc8dc(0x2d6)]?_0x1fc8dc(0x2da):this[_0x1fc8dc(0x263)])+':'+this['port']);_0xe561b2[_0x1fc8dc(0x233)]=()=>{var _0x53cfe7=_0x1fc8dc;this[_0x53cfe7(0x271)]=!0x1,this[_0x53cfe7(0x28d)](_0xe561b2),this['_attemptToReconnectShortly'](),_0x1ed537(new Error('logger\\x20websocket\\x20error'));},_0xe561b2[_0x1fc8dc(0x1fd)]=()=>{var _0x1456f8=_0x1fc8dc;this[_0x1456f8(0x26c)]||_0xe561b2[_0x1456f8(0x29a)]&&_0xe561b2['_socket']['unref']&&_0xe561b2['_socket'][_0x1456f8(0x2e2)](),_0x1dfeca(_0xe561b2);},_0xe561b2['onclose']=()=>{var _0x1475d1=_0x1fc8dc;this[_0x1475d1(0x1e5)]=!0x0,this[_0x1475d1(0x28d)](_0xe561b2),this['_attemptToReconnectShortly']();},_0xe561b2[_0x1fc8dc(0x2a3)]=_0x175d79=>{var _0x2e3b9f=_0x1fc8dc;try{if(!(_0x175d79!=null&&_0x175d79[_0x2e3b9f(0x203)])||!this[_0x2e3b9f(0x2cf)])return;let _0x44f4d4=JSON[_0x2e3b9f(0x24e)](_0x175d79['data']);this[_0x2e3b9f(0x2cf)](_0x44f4d4['method'],_0x44f4d4[_0x2e3b9f(0x2d9)],this[_0x2e3b9f(0x2d7)],this[_0x2e3b9f(0x26c)]);}catch{}};})[_0x162cdd(0x2b1)](_0x2e6e48=>(this[_0x162cdd(0x242)]=!0x0,this[_0x162cdd(0x2c6)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x162cdd(0x271)]=!0x0,this[_0x162cdd(0x234)]=0x0,_0x2e6e48))[_0x162cdd(0x2a7)](_0x890b60=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x162cdd(0x213)](_0x162cdd(0x25a)+this[_0x162cdd(0x2e3)]),_0x1ed537(new Error(_0x162cdd(0x265)+(_0x890b60&&_0x890b60[_0x162cdd(0x1ff)])))));}));},z[_0x3890c8(0x27c)]['_disposeWebsocket']=function(_0x1b2f6c){var _0x5b014b=_0x3890c8;this['_connected']=!0x1,this[_0x5b014b(0x2c6)]=!0x1;try{_0x1b2f6c['onclose']=null,_0x1b2f6c[_0x5b014b(0x233)]=null,_0x1b2f6c['onopen']=null;}catch{}try{_0x1b2f6c[_0x5b014b(0x26b)]<0x2&&_0x1b2f6c[_0x5b014b(0x2b6)]();}catch{}},z[_0x3890c8(0x27c)]['_attemptToReconnectShortly']=function(){var _0x124bb9=_0x3890c8;clearTimeout(this[_0x124bb9(0x1f1)]),!(this[_0x124bb9(0x234)]>=this[_0x124bb9(0x21d)])&&(this[_0x124bb9(0x1f1)]=setTimeout(()=>{var _0x4d4e90=_0x124bb9,_0xf6aafa;this[_0x4d4e90(0x242)]||this['_connecting']||(this[_0x4d4e90(0x20f)](),(_0xf6aafa=this[_0x4d4e90(0x249)])==null||_0xf6aafa['catch'](()=>this[_0x4d4e90(0x26e)]()));},0x1f4),this[_0x124bb9(0x1f1)][_0x124bb9(0x2e2)]&&this[_0x124bb9(0x1f1)][_0x124bb9(0x2e2)]());},z[_0x3890c8(0x27c)][_0x3890c8(0x26d)]=async function(_0x1bb714){var _0x9a6194=_0x3890c8;try{if(!this[_0x9a6194(0x271)])return;this[_0x9a6194(0x1e5)]&&this[_0x9a6194(0x20f)](),(await this[_0x9a6194(0x249)])[_0x9a6194(0x26d)](JSON[_0x9a6194(0x274)](_0x1bb714));}catch(_0x1b6312){this[_0x9a6194(0x293)]?console[_0x9a6194(0x213)](this[_0x9a6194(0x284)]+':\\x20'+(_0x1b6312&&_0x1b6312[_0x9a6194(0x1ff)])):(this['_extendedWarning']=!0x0,console[_0x9a6194(0x213)](this[_0x9a6194(0x284)]+':\\x20'+(_0x1b6312&&_0x1b6312[_0x9a6194(0x1ff)]),_0x1bb714)),this[_0x9a6194(0x271)]=!0x1,this[_0x9a6194(0x26e)]();}};function H(_0x20ad1f,_0x2292c5,_0x44fc0e,_0x23d982,_0x5cf68c,_0x2bf037,_0x2ca164,_0x17c366=ne){var _0x1889e1=_0x3890c8;let _0x540a51=_0x44fc0e['split'](',')[_0x1889e1(0x292)](_0x2d32cd=>{var _0xd94d2e=_0x1889e1,_0x5aa30d,_0x16905d,_0x42434e,_0x1ab968,_0x405adf,_0x2a8f7e,_0x117873,_0x5423c9;try{if(!_0x20ad1f[_0xd94d2e(0x29d)]){let _0x41ebfe=((_0x16905d=(_0x5aa30d=_0x20ad1f['process'])==null?void 0x0:_0x5aa30d[_0xd94d2e(0x2a9)])==null?void 0x0:_0x16905d[_0xd94d2e(0x286)])||((_0x1ab968=(_0x42434e=_0x20ad1f['process'])==null?void 0x0:_0x42434e[_0xd94d2e(0x282)])==null?void 0x0:_0x1ab968[_0xd94d2e(0x2c5)])==='edge';(_0x5cf68c===_0xd94d2e(0x244)||_0x5cf68c===_0xd94d2e(0x2d0)||_0x5cf68c===_0xd94d2e(0x27d)||_0x5cf68c===_0xd94d2e(0x25b))&&(_0x5cf68c+=_0x41ebfe?_0xd94d2e(0x222):_0xd94d2e(0x2a5));let _0x3b5c0e='';_0x5cf68c==='react-native'&&(_0x3b5c0e=(((_0x117873=(_0x2a8f7e=(_0x405adf=_0x20ad1f[_0xd94d2e(0x23f)])==null?void 0x0:_0x405adf['modules'])==null?void 0x0:_0x2a8f7e[_0xd94d2e(0x2b9)])==null?void 0x0:_0x117873[_0xd94d2e(0x280)])||_0xd94d2e(0x235))[_0xd94d2e(0x2b3)](),_0x3b5c0e&&(_0x5cf68c+='\\x20'+_0x3b5c0e,(_0x3b5c0e===_0xd94d2e(0x294)||_0x3b5c0e===_0xd94d2e(0x235)&&((_0x5423c9=_0x20ad1f[_0xd94d2e(0x1e9)])==null?void 0x0:_0x5423c9['hostname'])===_0xd94d2e(0x1ea))&&(_0x2292c5=_0xd94d2e(0x1ea)))),_0x20ad1f[_0xd94d2e(0x29d)]={'id':+new Date(),'tool':_0x5cf68c},_0x2ca164&&_0x5cf68c&&!_0x41ebfe&&(_0x3b5c0e?console['log'](_0xd94d2e(0x2bd)+_0x3b5c0e+_0xd94d2e(0x217)):console[_0xd94d2e(0x2d3)](_0xd94d2e(0x2e6)+(_0x5cf68c['charAt'](0x0)[_0xd94d2e(0x20b)]()+_0x5cf68c[_0xd94d2e(0x24a)](0x1))+',',_0xd94d2e(0x20e),'see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'));}let _0x326972=new z(_0x20ad1f,_0x2292c5,_0x2d32cd,_0x23d982,_0x2bf037,_0x17c366);return _0x326972[_0xd94d2e(0x26d)]['bind'](_0x326972);}catch(_0x266308){return console[_0xd94d2e(0x213)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x266308&&_0x266308[_0xd94d2e(0x1ff)]),()=>{};}});return _0x3b9c7f=>_0x540a51['forEach'](_0x742346=>_0x742346(_0x3b9c7f));}function ne(_0x31e108,_0x3ec168,_0x417cab,_0xfd62c4){var _0x4be061=_0x3890c8;_0xfd62c4&&_0x31e108===_0x4be061(0x22a)&&_0x417cab[_0x4be061(0x1e9)][_0x4be061(0x22a)]();}function b(_0x30160c){var _0x151986=_0x3890c8,_0x2c787f,_0x2a95b9;let _0x2b4527=function(_0x1f6955,_0x424bf1){return _0x424bf1-_0x1f6955;},_0x19085c;if(_0x30160c[_0x151986(0x20a)])_0x19085c=function(){var _0x56aa7e=_0x151986;return _0x30160c[_0x56aa7e(0x20a)][_0x56aa7e(0x2b0)]();};else{if(_0x30160c[_0x151986(0x266)]&&_0x30160c[_0x151986(0x266)][_0x151986(0x2b5)]&&((_0x2a95b9=(_0x2c787f=_0x30160c[_0x151986(0x266)])==null?void 0x0:_0x2c787f[_0x151986(0x282)])==null?void 0x0:_0x2a95b9['NEXT_RUNTIME'])!==_0x151986(0x272))_0x19085c=function(){var _0x2687a2=_0x151986;return _0x30160c[_0x2687a2(0x266)][_0x2687a2(0x2b5)]();},_0x2b4527=function(_0x841d75,_0x2991da){return 0x3e8*(_0x2991da[0x0]-_0x841d75[0x0])+(_0x2991da[0x1]-_0x841d75[0x1])/0xf4240;};else try{let {performance:_0xd3a2df}=require(_0x151986(0x2dc));_0x19085c=function(){var _0x52330d=_0x151986;return _0xd3a2df[_0x52330d(0x2b0)]();};}catch{_0x19085c=function(){return+new Date();};}}return{'elapsed':_0x2b4527,'timeStamp':_0x19085c,'now':()=>Date[_0x151986(0x2b0)]()};}function X(_0x31ddec,_0x301594,_0x57b351){var _0xd50045=_0x3890c8,_0x21878c,_0x18f50c,_0x1295d0,_0x2b81d1,_0x429f3b,_0x1a0b9b,_0x4dbdad;if(_0x31ddec[_0xd50045(0x24c)]!==void 0x0)return _0x31ddec[_0xd50045(0x24c)];let _0x36bf8=((_0x18f50c=(_0x21878c=_0x31ddec['process'])==null?void 0x0:_0x21878c[_0xd50045(0x2a9)])==null?void 0x0:_0x18f50c[_0xd50045(0x286)])||((_0x2b81d1=(_0x1295d0=_0x31ddec[_0xd50045(0x266)])==null?void 0x0:_0x1295d0[_0xd50045(0x282)])==null?void 0x0:_0x2b81d1['NEXT_RUNTIME'])===_0xd50045(0x272),_0xd67b84=!!(_0x57b351===_0xd50045(0x2ad)&&((_0x429f3b=_0x31ddec[_0xd50045(0x23f)])==null?void 0x0:_0x429f3b[_0xd50045(0x2cb)]));function _0x224a39(_0x3f855b){var _0x554bf3=_0xd50045;if(_0x3f855b['startsWith']('/')&&_0x3f855b[_0x554bf3(0x1f8)]('/')){let _0x1a86b1=new RegExp(_0x3f855b['slice'](0x1,-0x1));return _0xda75d7=>_0x1a86b1[_0x554bf3(0x25d)](_0xda75d7);}else{if(_0x3f855b[_0x554bf3(0x20d)]('*')||_0x3f855b[_0x554bf3(0x20d)]('?')){let _0x1cb7b0=new RegExp('^'+_0x3f855b['replace'](/\\./g,String[_0x554bf3(0x2a4)](0x5c)+'.')['replace'](/\\*/g,'.*')['replace'](/\\?/g,'.')+String[_0x554bf3(0x2a4)](0x24));return _0x3d762c=>_0x1cb7b0['test'](_0x3d762c);}else return _0x362679=>_0x362679===_0x3f855b;}}let _0x8cb568=_0x301594[_0xd50045(0x292)](_0x224a39);return _0x31ddec[_0xd50045(0x24c)]=_0x36bf8||!_0x301594,!_0x31ddec[_0xd50045(0x24c)]&&((_0x1a0b9b=_0x31ddec[_0xd50045(0x1e9)])==null?void 0x0:_0x1a0b9b[_0xd50045(0x270)])&&(_0x31ddec[_0xd50045(0x24c)]=_0x8cb568[_0xd50045(0x1df)](_0x16149e=>_0x16149e(_0x31ddec[_0xd50045(0x1e9)][_0xd50045(0x270)]))),_0xd67b84&&!_0x31ddec[_0xd50045(0x24c)]&&!((_0x4dbdad=_0x31ddec[_0xd50045(0x1e9)])!=null&&_0x4dbdad[_0xd50045(0x270)])&&(_0x31ddec[_0xd50045(0x24c)]=!0x0),_0x31ddec[_0xd50045(0x24c)];}function J(_0x1b046d,_0x3af781,_0x5b51f5,_0x4cee6a,_0x39e136,_0x5d8b23){var _0x1f5d44=_0x3890c8;_0x1b046d=_0x1b046d,_0x3af781=_0x3af781,_0x5b51f5=_0x5b51f5,_0x4cee6a=_0x4cee6a,_0x39e136=_0x39e136,_0x39e136=_0x39e136||{},_0x39e136['defaultLimits']=_0x39e136['defaultLimits']||{},_0x39e136[_0x1f5d44(0x225)]=_0x39e136[_0x1f5d44(0x225)]||{},_0x39e136[_0x1f5d44(0x236)]=_0x39e136[_0x1f5d44(0x236)]||{},_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x291)]=_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x291)]||{},_0x39e136[_0x1f5d44(0x236)]['global']=_0x39e136[_0x1f5d44(0x236)]['global']||{};let _0x4756a1={'perLogpoint':{'reduceOnCount':_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x291)][_0x1f5d44(0x1e8)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x39e136['reducePolicy'][_0x1f5d44(0x291)][_0x1f5d44(0x281)]||0x64,'resetWhenQuietMs':_0x39e136[_0x1f5d44(0x236)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x39e136[_0x1f5d44(0x236)]['perLogpoint']['resetOnProcessingTimeAverageMs']||0x64},'global':{'reduceOnCount':_0x39e136['reducePolicy'][_0x1f5d44(0x2d7)][_0x1f5d44(0x1e8)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x2d7)]['reduceOnAccumulatedProcessingTimeMs']||0x12c,'resetWhenQuietMs':_0x39e136[_0x1f5d44(0x236)]['global'][_0x1f5d44(0x264)]||0x32,'resetOnProcessingTimeAverageMs':_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x2d7)][_0x1f5d44(0x231)]||0x64}},_0x41af91=b(_0x1b046d),_0x13f85b=_0x41af91[_0x1f5d44(0x276)],_0x5553e9=_0x41af91[_0x1f5d44(0x2be)];function _0x39602c(){var _0x293841=_0x1f5d44;this[_0x293841(0x243)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x293841(0x279)]=/^(0|[1-9][0-9]*)$/,this[_0x293841(0x205)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x1b046d[_0x293841(0x2cd)],this[_0x293841(0x26f)]=_0x1b046d[_0x293841(0x23a)],this['_getOwnPropertyDescriptor']=Object[_0x293841(0x1f3)],this[_0x293841(0x202)]=Object['getOwnPropertyNames'],this['_Symbol']=_0x1b046d[_0x293841(0x22c)],this[_0x293841(0x215)]=RegExp[_0x293841(0x27c)][_0x293841(0x269)],this['_dateToString']=Date[_0x293841(0x27c)][_0x293841(0x269)];}_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2b2)]=function(_0x254f7f,_0x1babfb,_0x2e90c6,_0xdb54a9){var _0x33bfa3=_0x1f5d44,_0x168568=this,_0x471824=_0x2e90c6[_0x33bfa3(0x2bf)];function _0x3a3c67(_0x142852,_0x2cc0b4,_0x381677){var _0x16d30c=_0x33bfa3;_0x2cc0b4[_0x16d30c(0x27b)]=_0x16d30c(0x2a8),_0x2cc0b4[_0x16d30c(0x29e)]=_0x142852[_0x16d30c(0x1ff)],_0x3b2ef2=_0x381677[_0x16d30c(0x286)]['current'],_0x381677[_0x16d30c(0x286)][_0x16d30c(0x200)]=_0x2cc0b4,_0x168568[_0x16d30c(0x24f)](_0x2cc0b4,_0x381677);}let _0x361300,_0x7450c3,_0x1f473b=_0x1b046d[_0x33bfa3(0x240)];_0x1b046d[_0x33bfa3(0x240)]=!0x0,_0x1b046d[_0x33bfa3(0x1e7)]&&(_0x361300=_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x29e)],_0x7450c3=_0x1b046d['console'][_0x33bfa3(0x213)],_0x361300&&(_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x29e)]=function(){}),_0x7450c3&&(_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x213)]=function(){}));try{try{_0x2e90c6[_0x33bfa3(0x2c9)]++,_0x2e90c6[_0x33bfa3(0x2bf)]&&_0x2e90c6[_0x33bfa3(0x1e2)]['push'](_0x1babfb);var _0x2e727d,_0x4ce0a7,_0x5c981d,_0x3de9f4,_0x2ee350=[],_0x1fd1ab=[],_0x5481d5,_0x4e2612=this[_0x33bfa3(0x297)](_0x1babfb),_0x443a68=_0x4e2612==='array',_0xf19808=!0x1,_0x10ecde=_0x4e2612===_0x33bfa3(0x230),_0x4ec234=this[_0x33bfa3(0x1fc)](_0x4e2612),_0x13a3ac=this[_0x33bfa3(0x28e)](_0x4e2612),_0x21daba=_0x4ec234||_0x13a3ac,_0x5d7eb8={},_0x4a200a=0x0,_0x2e69b1=!0x1,_0x3b2ef2,_0x1ec59c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2e90c6['depth']){if(_0x443a68){if(_0x4ce0a7=_0x1babfb[_0x33bfa3(0x1ee)],_0x4ce0a7>_0x2e90c6['elements']){for(_0x5c981d=0x0,_0x3de9f4=_0x2e90c6[_0x33bfa3(0x1f7)],_0x2e727d=_0x5c981d;_0x2e727d<_0x3de9f4;_0x2e727d++)_0x1fd1ab['push'](_0x168568[_0x33bfa3(0x223)](_0x2ee350,_0x1babfb,_0x4e2612,_0x2e727d,_0x2e90c6));_0x254f7f[_0x33bfa3(0x228)]=!0x0;}else{for(_0x5c981d=0x0,_0x3de9f4=_0x4ce0a7,_0x2e727d=_0x5c981d;_0x2e727d<_0x3de9f4;_0x2e727d++)_0x1fd1ab['push'](_0x168568[_0x33bfa3(0x223)](_0x2ee350,_0x1babfb,_0x4e2612,_0x2e727d,_0x2e90c6));}_0x2e90c6['autoExpandPropertyCount']+=_0x1fd1ab[_0x33bfa3(0x1ee)];}if(!(_0x4e2612===_0x33bfa3(0x2d8)||_0x4e2612===_0x33bfa3(0x2cd))&&!_0x4ec234&&_0x4e2612!=='String'&&_0x4e2612!==_0x33bfa3(0x252)&&_0x4e2612!==_0x33bfa3(0x267)){var _0x2d45fa=_0xdb54a9[_0x33bfa3(0x1ef)]||_0x2e90c6[_0x33bfa3(0x1ef)];if(this['_isSet'](_0x1babfb)?(_0x2e727d=0x0,_0x1babfb[_0x33bfa3(0x2c8)](function(_0x3b3e4c){var _0x118b02=_0x33bfa3;if(_0x4a200a++,_0x2e90c6['autoExpandPropertyCount']++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;return;}if(!_0x2e90c6[_0x118b02(0x2af)]&&_0x2e90c6['autoExpand']&&_0x2e90c6[_0x118b02(0x28f)]>_0x2e90c6[_0x118b02(0x28a)]){_0x2e69b1=!0x0;return;}_0x1fd1ab[_0x118b02(0x2e0)](_0x168568[_0x118b02(0x223)](_0x2ee350,_0x1babfb,'Set',_0x2e727d++,_0x2e90c6,function(_0xba6f7b){return function(){return _0xba6f7b;};}(_0x3b3e4c)));})):this[_0x33bfa3(0x2ea)](_0x1babfb)&&_0x1babfb[_0x33bfa3(0x2c8)](function(_0x26b876,_0x1cd31e){var _0x13d9e6=_0x33bfa3;if(_0x4a200a++,_0x2e90c6[_0x13d9e6(0x28f)]++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;return;}if(!_0x2e90c6[_0x13d9e6(0x2af)]&&_0x2e90c6[_0x13d9e6(0x2bf)]&&_0x2e90c6[_0x13d9e6(0x28f)]>_0x2e90c6[_0x13d9e6(0x28a)]){_0x2e69b1=!0x0;return;}var _0x5245d5=_0x1cd31e[_0x13d9e6(0x269)]();_0x5245d5['length']>0x64&&(_0x5245d5=_0x5245d5[_0x13d9e6(0x232)](0x0,0x64)+'...'),_0x1fd1ab[_0x13d9e6(0x2e0)](_0x168568['_addProperty'](_0x2ee350,_0x1babfb,_0x13d9e6(0x283),_0x5245d5,_0x2e90c6,function(_0x437b32){return function(){return _0x437b32;};}(_0x26b876)));}),!_0xf19808){try{for(_0x5481d5 in _0x1babfb)if(!(_0x443a68&&_0x1ec59c[_0x33bfa3(0x25d)](_0x5481d5))&&!this[_0x33bfa3(0x251)](_0x1babfb,_0x5481d5,_0x2e90c6)){if(_0x4a200a++,_0x2e90c6['autoExpandPropertyCount']++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;break;}if(!_0x2e90c6['isExpressionToEvaluate']&&_0x2e90c6[_0x33bfa3(0x2bf)]&&_0x2e90c6[_0x33bfa3(0x28f)]>_0x2e90c6[_0x33bfa3(0x28a)]){_0x2e69b1=!0x0;break;}_0x1fd1ab[_0x33bfa3(0x2e0)](_0x168568[_0x33bfa3(0x1dd)](_0x2ee350,_0x5d7eb8,_0x1babfb,_0x4e2612,_0x5481d5,_0x2e90c6));}}catch{}if(_0x5d7eb8[_0x33bfa3(0x214)]=!0x0,_0x10ecde&&(_0x5d7eb8[_0x33bfa3(0x248)]=!0x0),!_0x2e69b1){var _0x4a9287=[][_0x33bfa3(0x29c)](this[_0x33bfa3(0x202)](_0x1babfb))['concat'](this[_0x33bfa3(0x2c1)](_0x1babfb));for(_0x2e727d=0x0,_0x4ce0a7=_0x4a9287[_0x33bfa3(0x1ee)];_0x2e727d<_0x4ce0a7;_0x2e727d++)if(_0x5481d5=_0x4a9287[_0x2e727d],!(_0x443a68&&_0x1ec59c[_0x33bfa3(0x25d)](_0x5481d5['toString']()))&&!this[_0x33bfa3(0x251)](_0x1babfb,_0x5481d5,_0x2e90c6)&&!_0x5d7eb8[typeof _0x5481d5!=_0x33bfa3(0x2ca)?_0x33bfa3(0x2ba)+_0x5481d5['toString']():_0x5481d5]){if(_0x4a200a++,_0x2e90c6[_0x33bfa3(0x28f)]++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;break;}if(!_0x2e90c6[_0x33bfa3(0x2af)]&&_0x2e90c6[_0x33bfa3(0x2bf)]&&_0x2e90c6[_0x33bfa3(0x28f)]>_0x2e90c6[_0x33bfa3(0x28a)]){_0x2e69b1=!0x0;break;}_0x1fd1ab['push'](_0x168568[_0x33bfa3(0x1dd)](_0x2ee350,_0x5d7eb8,_0x1babfb,_0x4e2612,_0x5481d5,_0x2e90c6));}}}}}if(_0x254f7f['type']=_0x4e2612,_0x21daba?(_0x254f7f[_0x33bfa3(0x2e9)]=_0x1babfb[_0x33bfa3(0x2b8)](),this[_0x33bfa3(0x298)](_0x4e2612,_0x254f7f,_0x2e90c6,_0xdb54a9)):_0x4e2612===_0x33bfa3(0x24d)?_0x254f7f[_0x33bfa3(0x2e9)]=this[_0x33bfa3(0x2aa)]['call'](_0x1babfb):_0x4e2612===_0x33bfa3(0x267)?_0x254f7f[_0x33bfa3(0x2e9)]=_0x1babfb['toString']():_0x4e2612===_0x33bfa3(0x285)?_0x254f7f['value']=this[_0x33bfa3(0x215)][_0x33bfa3(0x1ec)](_0x1babfb):_0x4e2612===_0x33bfa3(0x2ca)&&this[_0x33bfa3(0x2cc)]?_0x254f7f[_0x33bfa3(0x2e9)]=this[_0x33bfa3(0x2cc)]['prototype'][_0x33bfa3(0x269)]['call'](_0x1babfb):!_0x2e90c6[_0x33bfa3(0x2d4)]&&!(_0x4e2612===_0x33bfa3(0x2d8)||_0x4e2612===_0x33bfa3(0x2cd))&&(delete _0x254f7f[_0x33bfa3(0x2e9)],_0x254f7f[_0x33bfa3(0x20c)]=!0x0),_0x2e69b1&&(_0x254f7f['cappedProps']=!0x0),_0x3b2ef2=_0x2e90c6[_0x33bfa3(0x286)][_0x33bfa3(0x200)],_0x2e90c6['node'][_0x33bfa3(0x200)]=_0x254f7f,this['_treeNodePropertiesBeforeFullValue'](_0x254f7f,_0x2e90c6),_0x1fd1ab['length']){for(_0x2e727d=0x0,_0x4ce0a7=_0x1fd1ab['length'];_0x2e727d<_0x4ce0a7;_0x2e727d++)_0x1fd1ab[_0x2e727d](_0x2e727d);}_0x2ee350[_0x33bfa3(0x1ee)]&&(_0x254f7f[_0x33bfa3(0x1ef)]=_0x2ee350);}catch(_0x36e778){_0x3a3c67(_0x36e778,_0x254f7f,_0x2e90c6);}this[_0x33bfa3(0x2c7)](_0x1babfb,_0x254f7f),this[_0x33bfa3(0x2e5)](_0x254f7f,_0x2e90c6),_0x2e90c6[_0x33bfa3(0x286)][_0x33bfa3(0x200)]=_0x3b2ef2,_0x2e90c6[_0x33bfa3(0x2c9)]--,_0x2e90c6[_0x33bfa3(0x2bf)]=_0x471824,_0x2e90c6['autoExpand']&&_0x2e90c6[_0x33bfa3(0x1e2)][_0x33bfa3(0x27e)]();}finally{_0x361300&&(_0x1b046d['console'][_0x33bfa3(0x29e)]=_0x361300),_0x7450c3&&(_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x213)]=_0x7450c3),_0x1b046d[_0x33bfa3(0x240)]=_0x1f473b;}return _0x254f7f;},_0x39602c[_0x1f5d44(0x27c)]['_getOwnPropertySymbols']=function(_0xd19fef){var _0x1f8178=_0x1f5d44;return Object['getOwnPropertySymbols']?Object[_0x1f8178(0x209)](_0xd19fef):[];},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x219)]=function(_0x5ece89){var _0x396459=_0x1f5d44;return!!(_0x5ece89&&_0x1b046d['Set']&&this[_0x396459(0x2a0)](_0x5ece89)===_0x396459(0x2ce)&&_0x5ece89[_0x396459(0x2c8)]);},_0x39602c['prototype'][_0x1f5d44(0x251)]=function(_0x5e3ecf,_0x457efe,_0x503699){var _0x58ab93=_0x1f5d44;if(!_0x503699[_0x58ab93(0x226)]){let _0x40a764=this['_getOwnPropertyDescriptor'](_0x5e3ecf,_0x457efe);if(_0x40a764&&_0x40a764[_0x58ab93(0x1eb)])return!0x0;}return _0x503699[_0x58ab93(0x1f5)]?typeof _0x5e3ecf[_0x457efe]==_0x58ab93(0x230):!0x1;},_0x39602c['prototype'][_0x1f5d44(0x297)]=function(_0x55aea2){var _0x3223a6=_0x1f5d44,_0x435cfc='';return _0x435cfc=typeof _0x55aea2,_0x435cfc===_0x3223a6(0x26a)?this[_0x3223a6(0x2a0)](_0x55aea2)==='[object\\x20Array]'?_0x435cfc=_0x3223a6(0x260):this['_objectToString'](_0x55aea2)===_0x3223a6(0x287)?_0x435cfc=_0x3223a6(0x24d):this['_objectToString'](_0x55aea2)===_0x3223a6(0x2bc)?_0x435cfc=_0x3223a6(0x267):_0x55aea2===null?_0x435cfc='null':_0x55aea2[_0x3223a6(0x277)]&&(_0x435cfc=_0x55aea2[_0x3223a6(0x277)][_0x3223a6(0x273)]||_0x435cfc):_0x435cfc===_0x3223a6(0x2cd)&&this[_0x3223a6(0x26f)]&&_0x55aea2 instanceof this[_0x3223a6(0x26f)]&&(_0x435cfc=_0x3223a6(0x23a)),_0x435cfc;},_0x39602c['prototype'][_0x1f5d44(0x2a0)]=function(_0x2bac5a){var _0x4622cb=_0x1f5d44;return Object['prototype'][_0x4622cb(0x269)][_0x4622cb(0x1ec)](_0x2bac5a);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x1fc)]=function(_0x2ccf2c){var _0x674b58=_0x1f5d44;return _0x2ccf2c===_0x674b58(0x1e0)||_0x2ccf2c===_0x674b58(0x1f2)||_0x2ccf2c===_0x674b58(0x2e8);},_0x39602c[_0x1f5d44(0x27c)]['_isPrimitiveWrapperType']=function(_0x5299e2){var _0x55fd87=_0x1f5d44;return _0x5299e2===_0x55fd87(0x2d5)||_0x5299e2==='String'||_0x5299e2===_0x55fd87(0x245);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x223)]=function(_0x157555,_0x1174b0,_0x2697a9,_0x20ea02,_0x1e29d4,_0x5f3380){var _0x174700=this;return function(_0x3816dd){var _0x4b6516=_0x4187,_0x57f376=_0x1e29d4[_0x4b6516(0x286)][_0x4b6516(0x200)],_0xed0e7b=_0x1e29d4[_0x4b6516(0x286)]['index'],_0x57849c=_0x1e29d4['node'][_0x4b6516(0x261)];_0x1e29d4['node']['parent']=_0x57f376,_0x1e29d4[_0x4b6516(0x286)]['index']=typeof _0x20ea02==_0x4b6516(0x2e8)?_0x20ea02:_0x3816dd,_0x157555[_0x4b6516(0x2e0)](_0x174700[_0x4b6516(0x208)](_0x1174b0,_0x2697a9,_0x20ea02,_0x1e29d4,_0x5f3380)),_0x1e29d4[_0x4b6516(0x286)]['parent']=_0x57849c,_0x1e29d4['node'][_0x4b6516(0x2b4)]=_0xed0e7b;};},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x1dd)]=function(_0x16666b,_0x37b24a,_0xca6b76,_0x5eaca8,_0x47f24d,_0x518bd1,_0x3aad4c){var _0x5a59c9=_0x1f5d44,_0x5d7f32=this;return _0x37b24a[typeof _0x47f24d!=_0x5a59c9(0x2ca)?_0x5a59c9(0x2ba)+_0x47f24d['toString']():_0x47f24d]=!0x0,function(_0x186abb){var _0x227537=_0x5a59c9,_0x93753=_0x518bd1[_0x227537(0x286)]['current'],_0x3a8b46=_0x518bd1[_0x227537(0x286)][_0x227537(0x2b4)],_0x5cf7ec=_0x518bd1[_0x227537(0x286)]['parent'];_0x518bd1[_0x227537(0x286)]['parent']=_0x93753,_0x518bd1['node'][_0x227537(0x2b4)]=_0x186abb,_0x16666b[_0x227537(0x2e0)](_0x5d7f32[_0x227537(0x208)](_0xca6b76,_0x5eaca8,_0x47f24d,_0x518bd1,_0x3aad4c)),_0x518bd1[_0x227537(0x286)][_0x227537(0x261)]=_0x5cf7ec,_0x518bd1[_0x227537(0x286)]['index']=_0x3a8b46;};},_0x39602c[_0x1f5d44(0x27c)]['_property']=function(_0x1e9096,_0x2437b1,_0x5a258e,_0x306875,_0xeb1ab2){var _0x2e8b77=_0x1f5d44,_0x1ab203=this;_0xeb1ab2||(_0xeb1ab2=function(_0x2125a7,_0x5a8e51){return _0x2125a7[_0x5a8e51];});var _0x1a70b4=_0x5a258e[_0x2e8b77(0x269)](),_0x4a3b80=_0x306875[_0x2e8b77(0x27f)]||{},_0x4ec463=_0x306875[_0x2e8b77(0x2d4)],_0x436a10=_0x306875['isExpressionToEvaluate'];try{var _0x4a65f6=this[_0x2e8b77(0x2ea)](_0x1e9096),_0x14070f=_0x1a70b4;_0x4a65f6&&_0x14070f[0x0]==='\\x27'&&(_0x14070f=_0x14070f[_0x2e8b77(0x24a)](0x1,_0x14070f['length']-0x2));var _0x33f2fd=_0x306875[_0x2e8b77(0x27f)]=_0x4a3b80[_0x2e8b77(0x2ba)+_0x14070f];_0x33f2fd&&(_0x306875['depth']=_0x306875[_0x2e8b77(0x2d4)]+0x1),_0x306875['isExpressionToEvaluate']=!!_0x33f2fd;var _0x761c47=typeof _0x5a258e==_0x2e8b77(0x2ca),_0x2a07c1={'name':_0x761c47||_0x4a65f6?_0x1a70b4:this['_propertyName'](_0x1a70b4)};if(_0x761c47&&(_0x2a07c1[_0x2e8b77(0x2ca)]=!0x0),!(_0x2437b1===_0x2e8b77(0x260)||_0x2437b1===_0x2e8b77(0x2e7))){var _0x336b0f=this[_0x2e8b77(0x212)](_0x1e9096,_0x5a258e);if(_0x336b0f&&(_0x336b0f[_0x2e8b77(0x257)]&&(_0x2a07c1['setter']=!0x0),_0x336b0f[_0x2e8b77(0x1eb)]&&!_0x33f2fd&&!_0x306875[_0x2e8b77(0x226)]))return _0x2a07c1['getter']=!0x0,this[_0x2e8b77(0x237)](_0x2a07c1,_0x306875),_0x2a07c1;}var _0x42b0f3;try{_0x42b0f3=_0xeb1ab2(_0x1e9096,_0x5a258e);}catch(_0x470aa0){return _0x2a07c1={'name':_0x1a70b4,'type':_0x2e8b77(0x2a8),'error':_0x470aa0[_0x2e8b77(0x1ff)]},this[_0x2e8b77(0x237)](_0x2a07c1,_0x306875),_0x2a07c1;}var _0x3f69d6=this[_0x2e8b77(0x297)](_0x42b0f3),_0x26ec12=this[_0x2e8b77(0x1fc)](_0x3f69d6);if(_0x2a07c1['type']=_0x3f69d6,_0x26ec12)this['_processTreeNodeResult'](_0x2a07c1,_0x306875,_0x42b0f3,function(){var _0x27d61e=_0x2e8b77;_0x2a07c1[_0x27d61e(0x2e9)]=_0x42b0f3[_0x27d61e(0x2b8)](),!_0x33f2fd&&_0x1ab203[_0x27d61e(0x298)](_0x3f69d6,_0x2a07c1,_0x306875,{});});else{var _0x353800=_0x306875[_0x2e8b77(0x2bf)]&&_0x306875[_0x2e8b77(0x2c9)]<_0x306875[_0x2e8b77(0x21f)]&&_0x306875[_0x2e8b77(0x1e2)][_0x2e8b77(0x229)](_0x42b0f3)<0x0&&_0x3f69d6!==_0x2e8b77(0x230)&&_0x306875['autoExpandPropertyCount']<_0x306875[_0x2e8b77(0x28a)];_0x353800||_0x306875[_0x2e8b77(0x2c9)]<_0x4ec463||_0x33f2fd?this['serialize'](_0x2a07c1,_0x42b0f3,_0x306875,_0x33f2fd||{}):this[_0x2e8b77(0x237)](_0x2a07c1,_0x306875,_0x42b0f3,function(){var _0x26b4af=_0x2e8b77;_0x3f69d6==='null'||_0x3f69d6===_0x26b4af(0x2cd)||(delete _0x2a07c1[_0x26b4af(0x2e9)],_0x2a07c1[_0x26b4af(0x20c)]=!0x0);});}return _0x2a07c1;}finally{_0x306875[_0x2e8b77(0x27f)]=_0x4a3b80,_0x306875[_0x2e8b77(0x2d4)]=_0x4ec463,_0x306875[_0x2e8b77(0x2af)]=_0x436a10;}},_0x39602c[_0x1f5d44(0x27c)]['_capIfString']=function(_0x400724,_0x56f824,_0x52035a,_0x2a5d1b){var _0x1c76fb=_0x1f5d44,_0x5d1231=_0x2a5d1b[_0x1c76fb(0x23c)]||_0x52035a[_0x1c76fb(0x23c)];if((_0x400724===_0x1c76fb(0x1f2)||_0x400724===_0x1c76fb(0x23b))&&_0x56f824[_0x1c76fb(0x2e9)]){let _0x1dff43=_0x56f824[_0x1c76fb(0x2e9)][_0x1c76fb(0x1ee)];_0x52035a[_0x1c76fb(0x2b7)]+=_0x1dff43,_0x52035a[_0x1c76fb(0x2b7)]>_0x52035a[_0x1c76fb(0x1de)]?(_0x56f824[_0x1c76fb(0x20c)]='',delete _0x56f824[_0x1c76fb(0x2e9)]):_0x1dff43>_0x5d1231&&(_0x56f824[_0x1c76fb(0x20c)]=_0x56f824['value'][_0x1c76fb(0x24a)](0x0,_0x5d1231),delete _0x56f824[_0x1c76fb(0x2e9)]);}},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2ea)]=function(_0x2b582){var _0x4f59b4=_0x1f5d44;return!!(_0x2b582&&_0x1b046d[_0x4f59b4(0x283)]&&this[_0x4f59b4(0x2a0)](_0x2b582)===_0x4f59b4(0x2d2)&&_0x2b582[_0x4f59b4(0x2c8)]);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x1ed)]=function(_0xd0769c){var _0x56daad=_0x1f5d44;if(_0xd0769c[_0x56daad(0x207)](/^\\d+$/))return _0xd0769c;var _0x44321c;try{_0x44321c=JSON[_0x56daad(0x274)](''+_0xd0769c);}catch{_0x44321c='\\x22'+this[_0x56daad(0x2a0)](_0xd0769c)+'\\x22';}return _0x44321c[_0x56daad(0x207)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x44321c=_0x44321c[_0x56daad(0x24a)](0x1,_0x44321c[_0x56daad(0x1ee)]-0x2):_0x44321c=_0x44321c[_0x56daad(0x2c4)](/'/g,'\\x5c\\x27')[_0x56daad(0x2c4)](/\\\\\"/g,'\\x22')[_0x56daad(0x2c4)](/(^\"|\"$)/g,'\\x27'),_0x44321c;},_0x39602c[_0x1f5d44(0x27c)]['_processTreeNodeResult']=function(_0x35d4de,_0x18bf2b,_0x4b4ba8,_0x5e4ad4){var _0x3ae3b4=_0x1f5d44;this[_0x3ae3b4(0x24f)](_0x35d4de,_0x18bf2b),_0x5e4ad4&&_0x5e4ad4(),this[_0x3ae3b4(0x2c7)](_0x4b4ba8,_0x35d4de),this['_treeNodePropertiesAfterFullValue'](_0x35d4de,_0x18bf2b);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x24f)]=function(_0x3fef10,_0x16c344){var _0x25886e=_0x1f5d44;this[_0x25886e(0x275)](_0x3fef10,_0x16c344),this[_0x25886e(0x2d1)](_0x3fef10,_0x16c344),this[_0x25886e(0x239)](_0x3fef10,_0x16c344),this['_setNodePermissions'](_0x3fef10,_0x16c344);},_0x39602c['prototype'][_0x1f5d44(0x275)]=function(_0x4a95cf,_0x5175f9){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2d1)]=function(_0x4dd70e,_0x1d0a77){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x250)]=function(_0x2add9b,_0x21294a){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x241)]=function(_0x57f907){return _0x57f907===this['_undefined'];},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2e5)]=function(_0x47895e,_0x5ee6d0){var _0x3bb2e6=_0x1f5d44;this[_0x3bb2e6(0x250)](_0x47895e,_0x5ee6d0),this['_setNodeExpandableState'](_0x47895e),_0x5ee6d0[_0x3bb2e6(0x2c3)]&&this[_0x3bb2e6(0x288)](_0x47895e),this[_0x3bb2e6(0x2db)](_0x47895e,_0x5ee6d0),this[_0x3bb2e6(0x23e)](_0x47895e,_0x5ee6d0),this[_0x3bb2e6(0x2ab)](_0x47895e);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2c7)]=function(_0x406f89,_0x5dc600){var _0x3d052f=_0x1f5d44;try{_0x406f89&&typeof _0x406f89[_0x3d052f(0x1ee)]==_0x3d052f(0x2e8)&&(_0x5dc600[_0x3d052f(0x1ee)]=_0x406f89['length']);}catch{}if(_0x5dc600[_0x3d052f(0x27b)]===_0x3d052f(0x2e8)||_0x5dc600[_0x3d052f(0x27b)]===_0x3d052f(0x245)){if(isNaN(_0x5dc600['value']))_0x5dc600[_0x3d052f(0x299)]=!0x0,delete _0x5dc600[_0x3d052f(0x2e9)];else switch(_0x5dc600['value']){case Number[_0x3d052f(0x1f9)]:_0x5dc600['positiveInfinity']=!0x0,delete _0x5dc600['value'];break;case Number['NEGATIVE_INFINITY']:_0x5dc600[_0x3d052f(0x25c)]=!0x0,delete _0x5dc600[_0x3d052f(0x2e9)];break;case 0x0:this[_0x3d052f(0x247)](_0x5dc600['value'])&&(_0x5dc600['negativeZero']=!0x0);break;}}else _0x5dc600[_0x3d052f(0x27b)]===_0x3d052f(0x230)&&typeof _0x406f89[_0x3d052f(0x273)]=='string'&&_0x406f89[_0x3d052f(0x273)]&&_0x5dc600[_0x3d052f(0x273)]&&_0x406f89[_0x3d052f(0x273)]!==_0x5dc600['name']&&(_0x5dc600[_0x3d052f(0x218)]=_0x406f89[_0x3d052f(0x273)]);},_0x39602c['prototype'][_0x1f5d44(0x247)]=function(_0x58bf0d){var _0x1eeae2=_0x1f5d44;return 0x1/_0x58bf0d===Number[_0x1eeae2(0x210)];},_0x39602c[_0x1f5d44(0x27c)]['_sortProps']=function(_0x4d7dd2){var _0x5c6f19=_0x1f5d44;!_0x4d7dd2['props']||!_0x4d7dd2[_0x5c6f19(0x1ef)]['length']||_0x4d7dd2['type']===_0x5c6f19(0x260)||_0x4d7dd2[_0x5c6f19(0x27b)]===_0x5c6f19(0x283)||_0x4d7dd2[_0x5c6f19(0x27b)]===_0x5c6f19(0x22b)||_0x4d7dd2[_0x5c6f19(0x1ef)][_0x5c6f19(0x1e3)](function(_0xb25f8,_0x3feabb){var _0x34181c=_0x5c6f19,_0x30ed1b=_0xb25f8[_0x34181c(0x273)][_0x34181c(0x2b3)](),_0x28978d=_0x3feabb['name'][_0x34181c(0x2b3)]();return _0x30ed1b<_0x28978d?-0x1:_0x30ed1b>_0x28978d?0x1:0x0;});},_0x39602c[_0x1f5d44(0x27c)]['_addFunctionsNode']=function(_0x5294e5,_0x377958){var _0x476737=_0x1f5d44;if(!(_0x377958[_0x476737(0x1f5)]||!_0x5294e5[_0x476737(0x1ef)]||!_0x5294e5['props'][_0x476737(0x1ee)])){for(var _0x23c633=[],_0x1cff31=[],_0x44160d=0x0,_0x4684cd=_0x5294e5['props'][_0x476737(0x1ee)];_0x44160d<_0x4684cd;_0x44160d++){var _0x36796e=_0x5294e5['props'][_0x44160d];_0x36796e[_0x476737(0x27b)]===_0x476737(0x230)?_0x23c633[_0x476737(0x2e0)](_0x36796e):_0x1cff31[_0x476737(0x2e0)](_0x36796e);}if(!(!_0x1cff31[_0x476737(0x1ee)]||_0x23c633[_0x476737(0x1ee)]<=0x1)){_0x5294e5[_0x476737(0x1ef)]=_0x1cff31;var _0x1e6ca0={'functionsNode':!0x0,'props':_0x23c633};this[_0x476737(0x275)](_0x1e6ca0,_0x377958),this[_0x476737(0x250)](_0x1e6ca0,_0x377958),this[_0x476737(0x2df)](_0x1e6ca0),this[_0x476737(0x1e4)](_0x1e6ca0,_0x377958),_0x1e6ca0['id']+='\\x20f',_0x5294e5[_0x476737(0x1ef)][_0x476737(0x21b)](_0x1e6ca0);}}},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x23e)]=function(_0xc708e1,_0x1404ba){},_0x39602c['prototype']['_setNodeExpandableState']=function(_0x44d604){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x22d)]=function(_0x3c17fb){var _0x14eb98=_0x1f5d44;return Array[_0x14eb98(0x2a1)](_0x3c17fb)||typeof _0x3c17fb==_0x14eb98(0x26a)&&this['_objectToString'](_0x3c17fb)===_0x14eb98(0x21c);},_0x39602c[_0x1f5d44(0x27c)]['_setNodePermissions']=function(_0x1360b0,_0x443f96){},_0x39602c[_0x1f5d44(0x27c)]['_cleanNode']=function(_0x26f307){var _0x360d43=_0x1f5d44;delete _0x26f307[_0x360d43(0x1f0)],delete _0x26f307['_hasSetOnItsPath'],delete _0x26f307[_0x360d43(0x2de)];},_0x39602c['prototype'][_0x1f5d44(0x239)]=function(_0x21594a,_0x1ea38a){};let _0x4fccde=new _0x39602c(),_0x5aef3e={'props':_0x39e136['defaultLimits'][_0x1f5d44(0x1ef)]||0x64,'elements':_0x39e136['defaultLimits']['elements']||0x64,'strLength':_0x39e136[_0x1f5d44(0x1dc)][_0x1f5d44(0x23c)]||0x400*0x32,'totalStrLength':_0x39e136['defaultLimits'][_0x1f5d44(0x1de)]||0x400*0x32,'autoExpandLimit':_0x39e136['defaultLimits'][_0x1f5d44(0x28a)]||0x1388,'autoExpandMaxDepth':_0x39e136['defaultLimits'][_0x1f5d44(0x21f)]||0xa},_0x374151={'props':_0x39e136[_0x1f5d44(0x225)][_0x1f5d44(0x1ef)]||0x5,'elements':_0x39e136[_0x1f5d44(0x225)][_0x1f5d44(0x1f7)]||0x5,'strLength':_0x39e136[_0x1f5d44(0x225)]['strLength']||0x100,'totalStrLength':_0x39e136[_0x1f5d44(0x225)][_0x1f5d44(0x1de)]||0x100*0x3,'autoExpandLimit':_0x39e136['reducedLimits'][_0x1f5d44(0x28a)]||0x1e,'autoExpandMaxDepth':_0x39e136['reducedLimits']['autoExpandMaxDepth']||0x2};if(_0x5d8b23){let _0x275f95=_0x4fccde['serialize'][_0x1f5d44(0x262)](_0x4fccde);_0x4fccde[_0x1f5d44(0x2b2)]=function(_0x1c90b2,_0x4276f3,_0x30aacd,_0x55932d){return _0x275f95(_0x1c90b2,_0x5d8b23(_0x4276f3),_0x30aacd,_0x55932d);};}function _0x1a7762(_0x577f01,_0x418059,_0x269690,_0x32321b,_0x4cd5b2,_0x52912d){var _0x4ce86f=_0x1f5d44;let _0x3eb726,_0xb700fa;try{_0xb700fa=_0x5553e9(),_0x3eb726=_0x5b51f5[_0x418059],!_0x3eb726||_0xb700fa-_0x3eb726['ts']>_0x4756a1[_0x4ce86f(0x291)][_0x4ce86f(0x264)]&&_0x3eb726['count']&&_0x3eb726[_0x4ce86f(0x255)]/_0x3eb726[_0x4ce86f(0x238)]<_0x4756a1['perLogpoint']['resetOnProcessingTimeAverageMs']?(_0x5b51f5[_0x418059]=_0x3eb726={'count':0x0,'time':0x0,'ts':_0xb700fa},_0x5b51f5[_0x4ce86f(0x206)]={}):_0xb700fa-_0x5b51f5['hits']['ts']>_0x4756a1['global']['resetWhenQuietMs']&&_0x5b51f5['hits']['count']&&_0x5b51f5[_0x4ce86f(0x206)]['time']/_0x5b51f5['hits'][_0x4ce86f(0x238)]<_0x4756a1['global'][_0x4ce86f(0x231)]&&(_0x5b51f5[_0x4ce86f(0x206)]={});let _0x41ced7=[],_0x1fbc3d=_0x3eb726['reduceLimits']||_0x5b51f5['hits']['reduceLimits']?_0x374151:_0x5aef3e,_0x2da3f7=_0x3d6b99=>{var _0x44db24=_0x4ce86f;let _0x4c46fe={};return _0x4c46fe[_0x44db24(0x1ef)]=_0x3d6b99[_0x44db24(0x1ef)],_0x4c46fe['elements']=_0x3d6b99[_0x44db24(0x1f7)],_0x4c46fe[_0x44db24(0x23c)]=_0x3d6b99[_0x44db24(0x23c)],_0x4c46fe['totalStrLength']=_0x3d6b99[_0x44db24(0x1de)],_0x4c46fe[_0x44db24(0x28a)]=_0x3d6b99[_0x44db24(0x28a)],_0x4c46fe[_0x44db24(0x21f)]=_0x3d6b99[_0x44db24(0x21f)],_0x4c46fe[_0x44db24(0x2c3)]=!0x1,_0x4c46fe[_0x44db24(0x1f5)]=!_0x3af781,_0x4c46fe[_0x44db24(0x2d4)]=0x1,_0x4c46fe['level']=0x0,_0x4c46fe[_0x44db24(0x1fb)]=_0x44db24(0x29b),_0x4c46fe[_0x44db24(0x296)]='root_exp',_0x4c46fe[_0x44db24(0x2bf)]=!0x0,_0x4c46fe[_0x44db24(0x1e2)]=[],_0x4c46fe[_0x44db24(0x28f)]=0x0,_0x4c46fe[_0x44db24(0x226)]=_0x39e136[_0x44db24(0x226)],_0x4c46fe[_0x44db24(0x2b7)]=0x0,_0x4c46fe[_0x44db24(0x286)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x4c46fe;};for(var _0x42e392=0x0;_0x42e392<_0x4cd5b2[_0x4ce86f(0x1ee)];_0x42e392++)_0x41ced7[_0x4ce86f(0x2e0)](_0x4fccde[_0x4ce86f(0x2b2)]({'timeNode':_0x577f01==='time'||void 0x0},_0x4cd5b2[_0x42e392],_0x2da3f7(_0x1fbc3d),{}));if(_0x577f01===_0x4ce86f(0x29f)||_0x577f01===_0x4ce86f(0x29e)){let _0x4f7582=Error['stackTraceLimit'];try{Error[_0x4ce86f(0x221)]=0x1/0x0,_0x41ced7['push'](_0x4fccde[_0x4ce86f(0x2b2)]({'stackNode':!0x0},new Error()[_0x4ce86f(0x22e)],_0x2da3f7(_0x1fbc3d),{'strLength':0x1/0x0}));}finally{Error[_0x4ce86f(0x221)]=_0x4f7582;}}return{'method':_0x4ce86f(0x2d3),'version':_0x4cee6a,'args':[{'ts':_0x269690,'session':_0x32321b,'args':_0x41ced7,'id':_0x418059,'context':_0x52912d}]};}catch(_0x2a8c31){return{'method':_0x4ce86f(0x2d3),'version':_0x4cee6a,'args':[{'ts':_0x269690,'session':_0x32321b,'args':[{'type':_0x4ce86f(0x2a8),'error':_0x2a8c31&&_0x2a8c31['message']}],'id':_0x418059,'context':_0x52912d}]};}finally{try{if(_0x3eb726&&_0xb700fa){let _0x28b06b=_0x5553e9();_0x3eb726[_0x4ce86f(0x238)]++,_0x3eb726['time']+=_0x13f85b(_0xb700fa,_0x28b06b),_0x3eb726['ts']=_0x28b06b,_0x5b51f5[_0x4ce86f(0x206)]['count']++,_0x5b51f5[_0x4ce86f(0x206)][_0x4ce86f(0x255)]+=_0x13f85b(_0xb700fa,_0x28b06b),_0x5b51f5[_0x4ce86f(0x206)]['ts']=_0x28b06b,(_0x3eb726['count']>_0x4756a1['perLogpoint'][_0x4ce86f(0x1e8)]||_0x3eb726[_0x4ce86f(0x255)]>_0x4756a1[_0x4ce86f(0x291)][_0x4ce86f(0x281)])&&(_0x3eb726[_0x4ce86f(0x201)]=!0x0),(_0x5b51f5[_0x4ce86f(0x206)][_0x4ce86f(0x238)]>_0x4756a1[_0x4ce86f(0x2d7)][_0x4ce86f(0x1e8)]||_0x5b51f5[_0x4ce86f(0x206)][_0x4ce86f(0x255)]>_0x4756a1[_0x4ce86f(0x2d7)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x5b51f5[_0x4ce86f(0x206)]['reduceLimits']=!0x0);}}catch{}}}return _0x1a7762;}function G(_0x372717){var _0x766cc9=_0x3890c8;if(_0x372717&&typeof _0x372717=='object'&&_0x372717[_0x766cc9(0x277)])switch(_0x372717[_0x766cc9(0x277)]['name']){case _0x766cc9(0x256):return _0x372717[_0x766cc9(0x21a)](Symbol['iterator'])?Promise['resolve']():_0x372717;case _0x766cc9(0x1fe):return Promise[_0x766cc9(0x25e)]();}return _0x372717;}((_0xc5752,_0xa30047,_0x3f3995,_0x363a2d,_0x27a42d,_0x5b6f79,_0x45d099,_0x2bc6fb,_0x126cff,_0x1d3c75,_0x2e3f19,_0x464da7)=>{var _0xd5f224=_0x3890c8;if(_0xc5752[_0xd5f224(0x289)])return _0xc5752[_0xd5f224(0x289)];let _0x41b2d1={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0xc5752,_0x2bc6fb,_0x27a42d))return _0xc5752[_0xd5f224(0x289)]=_0x41b2d1,_0xc5752['_console_ninja'];let _0x3886d2=b(_0xc5752),_0x2794c3=_0x3886d2[_0xd5f224(0x276)],_0x44129f=_0x3886d2[_0xd5f224(0x2be)],_0x277b60=_0x3886d2[_0xd5f224(0x2b0)],_0x5b8e52={'hits':{},'ts':{}},_0x1f8b30=J(_0xc5752,_0x126cff,_0x5b8e52,_0x5b6f79,_0x464da7,_0x27a42d===_0xd5f224(0x244)?G:void 0x0),_0x46c143=(_0x82e8dd,_0x59b610,_0x51fdcc,_0x5c78c9,_0x42589f,_0x28db7b)=>{var _0xf273d1=_0xd5f224;let _0x39c71d=_0xc5752[_0xf273d1(0x289)];try{return _0xc5752['_console_ninja']=_0x41b2d1,_0x1f8b30(_0x82e8dd,_0x59b610,_0x51fdcc,_0x5c78c9,_0x42589f,_0x28db7b);}finally{_0xc5752[_0xf273d1(0x289)]=_0x39c71d;}},_0x186fbf=_0x4900f9=>{_0x5b8e52['ts'][_0x4900f9]=_0x44129f();},_0x21fa3c=(_0x242207,_0x1074db)=>{var _0x67dc13=_0xd5f224;let _0x44431a=_0x5b8e52['ts'][_0x1074db];if(delete _0x5b8e52['ts'][_0x1074db],_0x44431a){let _0x41f6fe=_0x2794c3(_0x44431a,_0x44129f());_0x13354f(_0x46c143(_0x67dc13(0x255),_0x242207,_0x277b60(),_0x728f74,[_0x41f6fe],_0x1074db));}},_0x341135=_0x55d522=>{var _0x594af4=_0xd5f224,_0x22d04b;return _0x27a42d==='next.js'&&_0xc5752[_0x594af4(0x224)]&&((_0x22d04b=_0x55d522==null?void 0x0:_0x55d522[_0x594af4(0x2d9)])==null?void 0x0:_0x22d04b[_0x594af4(0x1ee)])&&(_0x55d522[_0x594af4(0x2d9)][0x0][_0x594af4(0x224)]=_0xc5752['origin']),_0x55d522;};_0xc5752['_console_ninja']={'consoleLog':(_0x18a087,_0x257091)=>{var _0x240148=_0xd5f224;_0xc5752[_0x240148(0x1e7)]['log'][_0x240148(0x273)]!==_0x240148(0x227)&&_0x13354f(_0x46c143(_0x240148(0x2d3),_0x18a087,_0x277b60(),_0x728f74,_0x257091));},'consoleTrace':(_0x16338a,_0x54e3f4)=>{var _0x1399d8=_0xd5f224,_0x26a166,_0x49fc60;_0xc5752[_0x1399d8(0x1e7)]['log'][_0x1399d8(0x273)]!==_0x1399d8(0x1e6)&&((_0x49fc60=(_0x26a166=_0xc5752[_0x1399d8(0x266)])==null?void 0x0:_0x26a166[_0x1399d8(0x2a9)])!=null&&_0x49fc60[_0x1399d8(0x286)]&&(_0xc5752[_0x1399d8(0x2a2)]=!0x0),_0x13354f(_0x341135(_0x46c143(_0x1399d8(0x29f),_0x16338a,_0x277b60(),_0x728f74,_0x54e3f4))));},'consoleError':(_0x19664d,_0x4a89b4)=>{var _0x53d07d=_0xd5f224;_0xc5752[_0x53d07d(0x2a2)]=!0x0,_0x13354f(_0x341135(_0x46c143(_0x53d07d(0x29e),_0x19664d,_0x277b60(),_0x728f74,_0x4a89b4)));},'consoleTime':_0x4b8fda=>{_0x186fbf(_0x4b8fda);},'consoleTimeEnd':(_0x53faf9,_0x3ec558)=>{_0x21fa3c(_0x3ec558,_0x53faf9);},'autoLog':(_0x5aeaac,_0x2074bc)=>{_0x13354f(_0x46c143('log',_0x2074bc,_0x277b60(),_0x728f74,[_0x5aeaac]));},'autoLogMany':(_0x3634a2,_0x3fd372)=>{var _0x24da29=_0xd5f224;_0x13354f(_0x46c143(_0x24da29(0x2d3),_0x3634a2,_0x277b60(),_0x728f74,_0x3fd372));},'autoTrace':(_0x5bfb94,_0xee276a)=>{var _0xc67014=_0xd5f224;_0x13354f(_0x341135(_0x46c143(_0xc67014(0x29f),_0xee276a,_0x277b60(),_0x728f74,[_0x5bfb94])));},'autoTraceMany':(_0x29b396,_0x5dc6f1)=>{var _0x6097b4=_0xd5f224;_0x13354f(_0x341135(_0x46c143(_0x6097b4(0x29f),_0x29b396,_0x277b60(),_0x728f74,_0x5dc6f1)));},'autoTime':(_0x1ec463,_0x159318,_0xf6b2dc)=>{_0x186fbf(_0xf6b2dc);},'autoTimeEnd':(_0x3f6263,_0x4ce919,_0x1e750a)=>{_0x21fa3c(_0x4ce919,_0x1e750a);},'coverage':_0x25e683=>{_0x13354f({'method':'coverage','version':_0x5b6f79,'args':[{'id':_0x25e683}]});}};let _0x13354f=H(_0xc5752,_0xa30047,_0x3f3995,_0x363a2d,_0x27a42d,_0x1d3c75,_0x2e3f19),_0x728f74=_0xc5752[_0xd5f224(0x29d)];return _0xc5752[_0xd5f224(0x289)];})(globalThis,'127.0.0.1',_0x3890c8(0x253),_0x3890c8(0x27a),'next.js',_0x3890c8(0x2ac),_0x3890c8(0x2c0),_0x3890c8(0x2e1),_0x3890c8(0x259),_0x3890c8(0x2e4),'1',_0x3890c8(0x211));");
    } catch (e) {
        console.error(e);
    }
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
}),
"[project]/src/components/skills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skills",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const skillCategories = [
    {
        name: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion"
        ]
    },
    {
        name: "Backend",
        skills: [
            "Node.js",
            "Python",
            "PostgreSQL",
            "MongoDB",
            "GraphQL"
        ]
    },
    {
        name: "DevOps",
        skills: [
            "Docker",
            "AWS",
            "CI/CD",
            "Git",
            "Linux"
        ]
    },
    {
        name: "Tools",
        skills: [
            "Figma",
            "VS Code",
            "Postman",
            "Jest",
            "Storybook"
        ]
    }
];
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "py-24 bg-muted/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold mb-4",
                            children: "Skills & Technologies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/skills.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-2xl mx-auto",
                            children: "I work with a variety of technologies to bring ideas to life. Here's what I use on a daily basis."
                        }, void 0, false, {
                            fileName: "[project]/src/components/skills.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/skills.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: skillCategories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/skills.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: category.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "text-sm",
                                                    children: skill
                                                }, skill, false, {
                                                    fileName: "[project]/src/components/skills.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/skills.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/skills.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/skills.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this)
                        }, category.name, false, {
                            fileName: "[project]/src/components/skills.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/skills.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/skills.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/skills.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/input/Input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const contactInfo = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        label: "Email",
        value: "john@example.com",
        href: "mailto:john@example.com"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
        label: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        label: "Location",
        value: "San Francisco, CA",
        href: "#"
    }
];
function Contact() {
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formState)
            });
            if (response.ok) {
                setIsSubmitted(true);
                setFormState({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            /* eslint-disable */ console.error(...oo_tx(`3331095255_58_6_58_52_11`, "Error sending message:", error));
        } finally{
            setIsSubmitting(false);
            setTimeout(()=>setIsSubmitted(false), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold mb-4",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/contact.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-2xl mx-auto",
                            children: "Have a project in mind? Let's work together to create something amazing."
                        }, void 0, false, {
                            fileName: "[project]/src/components/contact.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/contact.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: contactInfo.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: item.href,
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: index * 0.1
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "hover:shadow-md transition-shadow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-4 flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-full bg-primary/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                            className: "h-5 w-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/contact.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/contact.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium",
                                                                children: item.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/contact.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/contact.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/contact.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/src/components/contact.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/contact.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "name",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "name",
                                                        value: formState.name,
                                                        onChange: (e)=>setFormState({
                                                                ...formState,
                                                                name: e.target.value
                                                            }),
                                                        placeholder: "Your name",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/contact.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "email",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "email",
                                                        type: "email",
                                                        value: formState.email,
                                                        onChange: (e)=>setFormState({
                                                                ...formState,
                                                                email: e.target.value
                                                            }),
                                                        placeholder: "your@email.com",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/contact.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "message",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                        id: "message",
                                                        value: formState.message,
                                                        onChange: (e)=>setFormState({
                                                                ...formState,
                                                                message: e.target.value
                                                            }),
                                                        placeholder: "Your message...",
                                                        rows: 4,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/contact.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/contact.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "w-full",
                                                disabled: isSubmitting,
                                                children: isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            className: "h-4 w-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/contact.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Send Message"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/contact.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/contact.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/contact.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/contact.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/contact.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/contact.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4187(_0x52e140,_0x15844d){var _0x1edd14=_0x1edd();return _0x4187=function(_0x418736,_0x252226){_0x418736=_0x418736-0x1dc;var _0x1c174c=_0x1edd14[_0x418736];return _0x1c174c;},_0x4187(_0x52e140,_0x15844d);}var _0x3890c8=_0x4187;function _0x1edd(){var _0xd02a82=['background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_connectToHostNow','NEGATIVE_INFINITY',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'_getOwnPropertyDescriptor','warn','_p_length','_regExpToString','38gkPcrc',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','funcName','_isSet','hasOwnProperty','unshift','[object\\x20Array]','_maxConnectAttemptCount','ws://','autoExpandMaxDepth','default','stackTraceLimit','\\x20server','_addProperty','origin','reducedLimits','resolveGetters','disabledLog','cappedElements','indexOf','reload','Set','Symbol','_isArray','stack','port','function','resetOnProcessingTimeAverageMs','slice','onerror','_connectAttemptCount','emulator','reducePolicy','_processTreeNodeResult','count','_setNodeExpressionPath','HTMLAllCollection','String','strLength','_WebSocketClass','_addLoadNode','expo','ninjaSuppressConsole','_isUndefined','_connected','_keyStrRegExp','next.js','Number','9jOUldT','_isNegativeZero','_p_name','_ws','substr','import(\\x27url\\x27)','_consoleNinjaAllowedToStart','date','parse','_treeNodePropertiesBeforeFullValue','_setNodeLabel','_blacklistedProperty','Buffer','63865','20667vPUjDv','time','Promise','set','2035290pGkmlm','','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','angular','negativeInfinity','test','resolve','WebSocket','array','parent','bind','host','resetWhenQuietMs','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','process','bigint','136cjwhMD','toString','object','readyState','_inBrowser','send','_attemptToReconnectShortly','_HTMLAllCollection','hostname','_allowedToSend','edge','name','stringify','_setNodeId','elapsed','constructor','182420mjmqKf','_numberRegExp',\"/Users/wasim/.windsurf/extensions/wallabyjs.console-ninja-1.0.525-universal/node_modules\",'type','prototype','astro','pop','expressionsToEvaluate','osName','reduceOnAccumulatedProcessingTimeMs','env','Map','_sendErrorMessage','RegExp','node','[object\\x20Date]','_sortProps','_console_ninja','autoExpandLimit','path','8098092eUysyP','_disposeWebsocket','_isPrimitiveWrapperType','autoExpandPropertyCount','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','perLogpoint','map','_extendedWarning','android','join','rootExpression','_type','_capIfString','nan','_socket','root_exp_id','concat','_console_ninja_session','error','trace','_objectToString','isArray','_ninjaIgnoreNextError','onmessage','fromCharCode','\\x20browser','getWebSocketClass','catch','unknown','versions','_dateToString','_cleanNode','1.0.0','react-native','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','isExpressionToEvaluate','now','then','serialize','toLowerCase','index','hrtime','close','allStrLength','valueOf','ExpoDevice','_p_','_inNextEdge','[object\\x20BigInt]','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','timeStamp','autoExpand','1776421588148','_getOwnPropertySymbols','7574025BLeRlk','sortProps','replace','NEXT_RUNTIME','_connecting','_additionalMetadata','forEach','level','symbol','modules','_Symbol','undefined','[object\\x20Set]','eventReceivedCallback','remix','_setNodeQueryPath','[object\\x20Map]','log','depth','Boolean','dockerizedApp','global','null','args','gateway.docker.internal','_addFunctionsNode','perf_hooks','5058944NenKCb','_hasMapOnItsPath','_setNodeExpandableState','push',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Wasims-MacBook-Pro.local\",\"192.168.29.85\"],'unref','_webSocketErrorDocsLink','','_treeNodePropertiesAfterFullValue','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','Error','number','value','_isMap','defaultLimits','_addObjectProperty','totalStrLength','some','boolean','_WebSocket','autoExpandPreviousObjects','sort','_setNodePermissions','_allowedToConnectOnSend','disabledTrace','console','reduceOnCount','location','10.0.2.2','get','call','_propertyName','length','props','_hasSymbolPropertyOnItsPath','_reconnectTimeout','string','getOwnPropertyDescriptor','import(\\x27path\\x27)','noFunctions','nodeModules','elements','endsWith','POSITIVE_INFINITY','21223450LJhzYJ','expId','_isPrimitiveType','onopen','bound\\x20Promise','message','current','reduceLimits','_getOwnPropertyNames','data','url','_quotedRegExp','hits','match','_property','getOwnPropertySymbols','performance','toUpperCase','capped','includes'];_0x1edd=function(){return _0xd02a82;};return _0x1edd();}(function(_0x593217,_0xb66b98){var _0x477746=_0x4187,_0x4015ef=_0x593217();while(!![]){try{var _0x55fb6d=parseInt(_0x477746(0x254))/0x1*(-parseInt(_0x477746(0x216))/0x2)+parseInt(_0x477746(0x258))/0x3+-parseInt(_0x477746(0x2dd))/0x4+parseInt(_0x477746(0x2c2))/0x5+-parseInt(_0x477746(0x28c))/0x6+-parseInt(_0x477746(0x278))/0x7*(parseInt(_0x477746(0x268))/0x8)+parseInt(_0x477746(0x246))/0x9*(parseInt(_0x477746(0x1fa))/0xa);if(_0x55fb6d===_0xb66b98)break;else _0x4015ef['push'](_0x4015ef['shift']());}catch(_0x3d51fa){_0x4015ef['push'](_0x4015ef['shift']());}}}(_0x1edd,0xd34bd));function z(_0x592fc3,_0x315c78,_0x20b8bb,_0x322b6b,_0x3f5c59,_0x2ff362){var _0x1e9d9b=_0x4187,_0x1f3283,_0x1d630f,_0x518481,_0x138db6;this[_0x1e9d9b(0x2d7)]=_0x592fc3,this[_0x1e9d9b(0x263)]=_0x315c78,this[_0x1e9d9b(0x22f)]=_0x20b8bb,this['nodeModules']=_0x322b6b,this['dockerizedApp']=_0x3f5c59,this['eventReceivedCallback']=_0x2ff362,this[_0x1e9d9b(0x271)]=!0x0,this[_0x1e9d9b(0x1e5)]=!0x0,this[_0x1e9d9b(0x242)]=!0x1,this[_0x1e9d9b(0x2c6)]=!0x1,this[_0x1e9d9b(0x2bb)]=((_0x1d630f=(_0x1f3283=_0x592fc3['process'])==null?void 0x0:_0x1f3283[_0x1e9d9b(0x282)])==null?void 0x0:_0x1d630f['NEXT_RUNTIME'])===_0x1e9d9b(0x272),this[_0x1e9d9b(0x26c)]=!((_0x138db6=(_0x518481=this[_0x1e9d9b(0x2d7)][_0x1e9d9b(0x266)])==null?void 0x0:_0x518481[_0x1e9d9b(0x2a9)])!=null&&_0x138db6[_0x1e9d9b(0x286)])&&!this[_0x1e9d9b(0x2bb)],this[_0x1e9d9b(0x23d)]=null,this['_connectAttemptCount']=0x0,this[_0x1e9d9b(0x21d)]=0x14,this[_0x1e9d9b(0x2e3)]='https://tinyurl.com/37x8b79t',this[_0x1e9d9b(0x284)]=(this['_inBrowser']?_0x1e9d9b(0x2ae):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x1e9d9b(0x2e3)];}z[_0x3890c8(0x27c)][_0x3890c8(0x2a6)]=async function(){var _0x47df01=_0x3890c8,_0x4c9b9c,_0x348789;if(this['_WebSocketClass'])return this[_0x47df01(0x23d)];let _0x5b4a33;if(this[_0x47df01(0x26c)]||this[_0x47df01(0x2bb)])_0x5b4a33=this[_0x47df01(0x2d7)][_0x47df01(0x25f)];else{if((_0x4c9b9c=this['global'][_0x47df01(0x266)])!=null&&_0x4c9b9c['_WebSocket'])_0x5b4a33=(_0x348789=this[_0x47df01(0x2d7)]['process'])==null?void 0x0:_0x348789[_0x47df01(0x1e1)];else try{_0x5b4a33=(await new Function('path',_0x47df01(0x204),_0x47df01(0x1f6),_0x47df01(0x290))(await(0x0,eval)(_0x47df01(0x1f4)),await(0x0,eval)(_0x47df01(0x24b)),this[_0x47df01(0x1f6)]))[_0x47df01(0x220)];}catch{try{_0x5b4a33=require(require(_0x47df01(0x28b))[_0x47df01(0x295)](this[_0x47df01(0x1f6)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x47df01(0x23d)]=_0x5b4a33,_0x5b4a33;},z[_0x3890c8(0x27c)][_0x3890c8(0x20f)]=function(){var _0x1d32f3=_0x3890c8;this[_0x1d32f3(0x2c6)]||this[_0x1d32f3(0x242)]||this[_0x1d32f3(0x234)]>=this[_0x1d32f3(0x21d)]||(this[_0x1d32f3(0x1e5)]=!0x1,this[_0x1d32f3(0x2c6)]=!0x0,this[_0x1d32f3(0x234)]++,this[_0x1d32f3(0x249)]=new Promise((_0x1dfeca,_0x1ed537)=>{var _0x162cdd=_0x1d32f3;this[_0x162cdd(0x2a6)]()[_0x162cdd(0x2b1)](_0x47460b=>{var _0x1fc8dc=_0x162cdd;let _0xe561b2=new _0x47460b(_0x1fc8dc(0x21e)+(!this[_0x1fc8dc(0x26c)]&&this[_0x1fc8dc(0x2d6)]?_0x1fc8dc(0x2da):this[_0x1fc8dc(0x263)])+':'+this['port']);_0xe561b2[_0x1fc8dc(0x233)]=()=>{var _0x53cfe7=_0x1fc8dc;this[_0x53cfe7(0x271)]=!0x1,this[_0x53cfe7(0x28d)](_0xe561b2),this['_attemptToReconnectShortly'](),_0x1ed537(new Error('logger\\x20websocket\\x20error'));},_0xe561b2[_0x1fc8dc(0x1fd)]=()=>{var _0x1456f8=_0x1fc8dc;this[_0x1456f8(0x26c)]||_0xe561b2[_0x1456f8(0x29a)]&&_0xe561b2['_socket']['unref']&&_0xe561b2['_socket'][_0x1456f8(0x2e2)](),_0x1dfeca(_0xe561b2);},_0xe561b2['onclose']=()=>{var _0x1475d1=_0x1fc8dc;this[_0x1475d1(0x1e5)]=!0x0,this[_0x1475d1(0x28d)](_0xe561b2),this['_attemptToReconnectShortly']();},_0xe561b2[_0x1fc8dc(0x2a3)]=_0x175d79=>{var _0x2e3b9f=_0x1fc8dc;try{if(!(_0x175d79!=null&&_0x175d79[_0x2e3b9f(0x203)])||!this[_0x2e3b9f(0x2cf)])return;let _0x44f4d4=JSON[_0x2e3b9f(0x24e)](_0x175d79['data']);this[_0x2e3b9f(0x2cf)](_0x44f4d4['method'],_0x44f4d4[_0x2e3b9f(0x2d9)],this[_0x2e3b9f(0x2d7)],this[_0x2e3b9f(0x26c)]);}catch{}};})[_0x162cdd(0x2b1)](_0x2e6e48=>(this[_0x162cdd(0x242)]=!0x0,this[_0x162cdd(0x2c6)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x162cdd(0x271)]=!0x0,this[_0x162cdd(0x234)]=0x0,_0x2e6e48))[_0x162cdd(0x2a7)](_0x890b60=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x162cdd(0x213)](_0x162cdd(0x25a)+this[_0x162cdd(0x2e3)]),_0x1ed537(new Error(_0x162cdd(0x265)+(_0x890b60&&_0x890b60[_0x162cdd(0x1ff)])))));}));},z[_0x3890c8(0x27c)]['_disposeWebsocket']=function(_0x1b2f6c){var _0x5b014b=_0x3890c8;this['_connected']=!0x1,this[_0x5b014b(0x2c6)]=!0x1;try{_0x1b2f6c['onclose']=null,_0x1b2f6c[_0x5b014b(0x233)]=null,_0x1b2f6c['onopen']=null;}catch{}try{_0x1b2f6c[_0x5b014b(0x26b)]<0x2&&_0x1b2f6c[_0x5b014b(0x2b6)]();}catch{}},z[_0x3890c8(0x27c)]['_attemptToReconnectShortly']=function(){var _0x124bb9=_0x3890c8;clearTimeout(this[_0x124bb9(0x1f1)]),!(this[_0x124bb9(0x234)]>=this[_0x124bb9(0x21d)])&&(this[_0x124bb9(0x1f1)]=setTimeout(()=>{var _0x4d4e90=_0x124bb9,_0xf6aafa;this[_0x4d4e90(0x242)]||this['_connecting']||(this[_0x4d4e90(0x20f)](),(_0xf6aafa=this[_0x4d4e90(0x249)])==null||_0xf6aafa['catch'](()=>this[_0x4d4e90(0x26e)]()));},0x1f4),this[_0x124bb9(0x1f1)][_0x124bb9(0x2e2)]&&this[_0x124bb9(0x1f1)][_0x124bb9(0x2e2)]());},z[_0x3890c8(0x27c)][_0x3890c8(0x26d)]=async function(_0x1bb714){var _0x9a6194=_0x3890c8;try{if(!this[_0x9a6194(0x271)])return;this[_0x9a6194(0x1e5)]&&this[_0x9a6194(0x20f)](),(await this[_0x9a6194(0x249)])[_0x9a6194(0x26d)](JSON[_0x9a6194(0x274)](_0x1bb714));}catch(_0x1b6312){this[_0x9a6194(0x293)]?console[_0x9a6194(0x213)](this[_0x9a6194(0x284)]+':\\x20'+(_0x1b6312&&_0x1b6312[_0x9a6194(0x1ff)])):(this['_extendedWarning']=!0x0,console[_0x9a6194(0x213)](this[_0x9a6194(0x284)]+':\\x20'+(_0x1b6312&&_0x1b6312[_0x9a6194(0x1ff)]),_0x1bb714)),this[_0x9a6194(0x271)]=!0x1,this[_0x9a6194(0x26e)]();}};function H(_0x20ad1f,_0x2292c5,_0x44fc0e,_0x23d982,_0x5cf68c,_0x2bf037,_0x2ca164,_0x17c366=ne){var _0x1889e1=_0x3890c8;let _0x540a51=_0x44fc0e['split'](',')[_0x1889e1(0x292)](_0x2d32cd=>{var _0xd94d2e=_0x1889e1,_0x5aa30d,_0x16905d,_0x42434e,_0x1ab968,_0x405adf,_0x2a8f7e,_0x117873,_0x5423c9;try{if(!_0x20ad1f[_0xd94d2e(0x29d)]){let _0x41ebfe=((_0x16905d=(_0x5aa30d=_0x20ad1f['process'])==null?void 0x0:_0x5aa30d[_0xd94d2e(0x2a9)])==null?void 0x0:_0x16905d[_0xd94d2e(0x286)])||((_0x1ab968=(_0x42434e=_0x20ad1f['process'])==null?void 0x0:_0x42434e[_0xd94d2e(0x282)])==null?void 0x0:_0x1ab968[_0xd94d2e(0x2c5)])==='edge';(_0x5cf68c===_0xd94d2e(0x244)||_0x5cf68c===_0xd94d2e(0x2d0)||_0x5cf68c===_0xd94d2e(0x27d)||_0x5cf68c===_0xd94d2e(0x25b))&&(_0x5cf68c+=_0x41ebfe?_0xd94d2e(0x222):_0xd94d2e(0x2a5));let _0x3b5c0e='';_0x5cf68c==='react-native'&&(_0x3b5c0e=(((_0x117873=(_0x2a8f7e=(_0x405adf=_0x20ad1f[_0xd94d2e(0x23f)])==null?void 0x0:_0x405adf['modules'])==null?void 0x0:_0x2a8f7e[_0xd94d2e(0x2b9)])==null?void 0x0:_0x117873[_0xd94d2e(0x280)])||_0xd94d2e(0x235))[_0xd94d2e(0x2b3)](),_0x3b5c0e&&(_0x5cf68c+='\\x20'+_0x3b5c0e,(_0x3b5c0e===_0xd94d2e(0x294)||_0x3b5c0e===_0xd94d2e(0x235)&&((_0x5423c9=_0x20ad1f[_0xd94d2e(0x1e9)])==null?void 0x0:_0x5423c9['hostname'])===_0xd94d2e(0x1ea))&&(_0x2292c5=_0xd94d2e(0x1ea)))),_0x20ad1f[_0xd94d2e(0x29d)]={'id':+new Date(),'tool':_0x5cf68c},_0x2ca164&&_0x5cf68c&&!_0x41ebfe&&(_0x3b5c0e?console['log'](_0xd94d2e(0x2bd)+_0x3b5c0e+_0xd94d2e(0x217)):console[_0xd94d2e(0x2d3)](_0xd94d2e(0x2e6)+(_0x5cf68c['charAt'](0x0)[_0xd94d2e(0x20b)]()+_0x5cf68c[_0xd94d2e(0x24a)](0x1))+',',_0xd94d2e(0x20e),'see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'));}let _0x326972=new z(_0x20ad1f,_0x2292c5,_0x2d32cd,_0x23d982,_0x2bf037,_0x17c366);return _0x326972[_0xd94d2e(0x26d)]['bind'](_0x326972);}catch(_0x266308){return console[_0xd94d2e(0x213)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x266308&&_0x266308[_0xd94d2e(0x1ff)]),()=>{};}});return _0x3b9c7f=>_0x540a51['forEach'](_0x742346=>_0x742346(_0x3b9c7f));}function ne(_0x31e108,_0x3ec168,_0x417cab,_0xfd62c4){var _0x4be061=_0x3890c8;_0xfd62c4&&_0x31e108===_0x4be061(0x22a)&&_0x417cab[_0x4be061(0x1e9)][_0x4be061(0x22a)]();}function b(_0x30160c){var _0x151986=_0x3890c8,_0x2c787f,_0x2a95b9;let _0x2b4527=function(_0x1f6955,_0x424bf1){return _0x424bf1-_0x1f6955;},_0x19085c;if(_0x30160c[_0x151986(0x20a)])_0x19085c=function(){var _0x56aa7e=_0x151986;return _0x30160c[_0x56aa7e(0x20a)][_0x56aa7e(0x2b0)]();};else{if(_0x30160c[_0x151986(0x266)]&&_0x30160c[_0x151986(0x266)][_0x151986(0x2b5)]&&((_0x2a95b9=(_0x2c787f=_0x30160c[_0x151986(0x266)])==null?void 0x0:_0x2c787f[_0x151986(0x282)])==null?void 0x0:_0x2a95b9['NEXT_RUNTIME'])!==_0x151986(0x272))_0x19085c=function(){var _0x2687a2=_0x151986;return _0x30160c[_0x2687a2(0x266)][_0x2687a2(0x2b5)]();},_0x2b4527=function(_0x841d75,_0x2991da){return 0x3e8*(_0x2991da[0x0]-_0x841d75[0x0])+(_0x2991da[0x1]-_0x841d75[0x1])/0xf4240;};else try{let {performance:_0xd3a2df}=require(_0x151986(0x2dc));_0x19085c=function(){var _0x52330d=_0x151986;return _0xd3a2df[_0x52330d(0x2b0)]();};}catch{_0x19085c=function(){return+new Date();};}}return{'elapsed':_0x2b4527,'timeStamp':_0x19085c,'now':()=>Date[_0x151986(0x2b0)]()};}function X(_0x31ddec,_0x301594,_0x57b351){var _0xd50045=_0x3890c8,_0x21878c,_0x18f50c,_0x1295d0,_0x2b81d1,_0x429f3b,_0x1a0b9b,_0x4dbdad;if(_0x31ddec[_0xd50045(0x24c)]!==void 0x0)return _0x31ddec[_0xd50045(0x24c)];let _0x36bf8=((_0x18f50c=(_0x21878c=_0x31ddec['process'])==null?void 0x0:_0x21878c[_0xd50045(0x2a9)])==null?void 0x0:_0x18f50c[_0xd50045(0x286)])||((_0x2b81d1=(_0x1295d0=_0x31ddec[_0xd50045(0x266)])==null?void 0x0:_0x1295d0[_0xd50045(0x282)])==null?void 0x0:_0x2b81d1['NEXT_RUNTIME'])===_0xd50045(0x272),_0xd67b84=!!(_0x57b351===_0xd50045(0x2ad)&&((_0x429f3b=_0x31ddec[_0xd50045(0x23f)])==null?void 0x0:_0x429f3b[_0xd50045(0x2cb)]));function _0x224a39(_0x3f855b){var _0x554bf3=_0xd50045;if(_0x3f855b['startsWith']('/')&&_0x3f855b[_0x554bf3(0x1f8)]('/')){let _0x1a86b1=new RegExp(_0x3f855b['slice'](0x1,-0x1));return _0xda75d7=>_0x1a86b1[_0x554bf3(0x25d)](_0xda75d7);}else{if(_0x3f855b[_0x554bf3(0x20d)]('*')||_0x3f855b[_0x554bf3(0x20d)]('?')){let _0x1cb7b0=new RegExp('^'+_0x3f855b['replace'](/\\./g,String[_0x554bf3(0x2a4)](0x5c)+'.')['replace'](/\\*/g,'.*')['replace'](/\\?/g,'.')+String[_0x554bf3(0x2a4)](0x24));return _0x3d762c=>_0x1cb7b0['test'](_0x3d762c);}else return _0x362679=>_0x362679===_0x3f855b;}}let _0x8cb568=_0x301594[_0xd50045(0x292)](_0x224a39);return _0x31ddec[_0xd50045(0x24c)]=_0x36bf8||!_0x301594,!_0x31ddec[_0xd50045(0x24c)]&&((_0x1a0b9b=_0x31ddec[_0xd50045(0x1e9)])==null?void 0x0:_0x1a0b9b[_0xd50045(0x270)])&&(_0x31ddec[_0xd50045(0x24c)]=_0x8cb568[_0xd50045(0x1df)](_0x16149e=>_0x16149e(_0x31ddec[_0xd50045(0x1e9)][_0xd50045(0x270)]))),_0xd67b84&&!_0x31ddec[_0xd50045(0x24c)]&&!((_0x4dbdad=_0x31ddec[_0xd50045(0x1e9)])!=null&&_0x4dbdad[_0xd50045(0x270)])&&(_0x31ddec[_0xd50045(0x24c)]=!0x0),_0x31ddec[_0xd50045(0x24c)];}function J(_0x1b046d,_0x3af781,_0x5b51f5,_0x4cee6a,_0x39e136,_0x5d8b23){var _0x1f5d44=_0x3890c8;_0x1b046d=_0x1b046d,_0x3af781=_0x3af781,_0x5b51f5=_0x5b51f5,_0x4cee6a=_0x4cee6a,_0x39e136=_0x39e136,_0x39e136=_0x39e136||{},_0x39e136['defaultLimits']=_0x39e136['defaultLimits']||{},_0x39e136[_0x1f5d44(0x225)]=_0x39e136[_0x1f5d44(0x225)]||{},_0x39e136[_0x1f5d44(0x236)]=_0x39e136[_0x1f5d44(0x236)]||{},_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x291)]=_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x291)]||{},_0x39e136[_0x1f5d44(0x236)]['global']=_0x39e136[_0x1f5d44(0x236)]['global']||{};let _0x4756a1={'perLogpoint':{'reduceOnCount':_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x291)][_0x1f5d44(0x1e8)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x39e136['reducePolicy'][_0x1f5d44(0x291)][_0x1f5d44(0x281)]||0x64,'resetWhenQuietMs':_0x39e136[_0x1f5d44(0x236)]['perLogpoint']['resetWhenQuietMs']||0x1f4,'resetOnProcessingTimeAverageMs':_0x39e136[_0x1f5d44(0x236)]['perLogpoint']['resetOnProcessingTimeAverageMs']||0x64},'global':{'reduceOnCount':_0x39e136['reducePolicy'][_0x1f5d44(0x2d7)][_0x1f5d44(0x1e8)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x2d7)]['reduceOnAccumulatedProcessingTimeMs']||0x12c,'resetWhenQuietMs':_0x39e136[_0x1f5d44(0x236)]['global'][_0x1f5d44(0x264)]||0x32,'resetOnProcessingTimeAverageMs':_0x39e136[_0x1f5d44(0x236)][_0x1f5d44(0x2d7)][_0x1f5d44(0x231)]||0x64}},_0x41af91=b(_0x1b046d),_0x13f85b=_0x41af91[_0x1f5d44(0x276)],_0x5553e9=_0x41af91[_0x1f5d44(0x2be)];function _0x39602c(){var _0x293841=_0x1f5d44;this[_0x293841(0x243)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x293841(0x279)]=/^(0|[1-9][0-9]*)$/,this[_0x293841(0x205)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x1b046d[_0x293841(0x2cd)],this[_0x293841(0x26f)]=_0x1b046d[_0x293841(0x23a)],this['_getOwnPropertyDescriptor']=Object[_0x293841(0x1f3)],this[_0x293841(0x202)]=Object['getOwnPropertyNames'],this['_Symbol']=_0x1b046d[_0x293841(0x22c)],this[_0x293841(0x215)]=RegExp[_0x293841(0x27c)][_0x293841(0x269)],this['_dateToString']=Date[_0x293841(0x27c)][_0x293841(0x269)];}_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2b2)]=function(_0x254f7f,_0x1babfb,_0x2e90c6,_0xdb54a9){var _0x33bfa3=_0x1f5d44,_0x168568=this,_0x471824=_0x2e90c6[_0x33bfa3(0x2bf)];function _0x3a3c67(_0x142852,_0x2cc0b4,_0x381677){var _0x16d30c=_0x33bfa3;_0x2cc0b4[_0x16d30c(0x27b)]=_0x16d30c(0x2a8),_0x2cc0b4[_0x16d30c(0x29e)]=_0x142852[_0x16d30c(0x1ff)],_0x3b2ef2=_0x381677[_0x16d30c(0x286)]['current'],_0x381677[_0x16d30c(0x286)][_0x16d30c(0x200)]=_0x2cc0b4,_0x168568[_0x16d30c(0x24f)](_0x2cc0b4,_0x381677);}let _0x361300,_0x7450c3,_0x1f473b=_0x1b046d[_0x33bfa3(0x240)];_0x1b046d[_0x33bfa3(0x240)]=!0x0,_0x1b046d[_0x33bfa3(0x1e7)]&&(_0x361300=_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x29e)],_0x7450c3=_0x1b046d['console'][_0x33bfa3(0x213)],_0x361300&&(_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x29e)]=function(){}),_0x7450c3&&(_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x213)]=function(){}));try{try{_0x2e90c6[_0x33bfa3(0x2c9)]++,_0x2e90c6[_0x33bfa3(0x2bf)]&&_0x2e90c6[_0x33bfa3(0x1e2)]['push'](_0x1babfb);var _0x2e727d,_0x4ce0a7,_0x5c981d,_0x3de9f4,_0x2ee350=[],_0x1fd1ab=[],_0x5481d5,_0x4e2612=this[_0x33bfa3(0x297)](_0x1babfb),_0x443a68=_0x4e2612==='array',_0xf19808=!0x1,_0x10ecde=_0x4e2612===_0x33bfa3(0x230),_0x4ec234=this[_0x33bfa3(0x1fc)](_0x4e2612),_0x13a3ac=this[_0x33bfa3(0x28e)](_0x4e2612),_0x21daba=_0x4ec234||_0x13a3ac,_0x5d7eb8={},_0x4a200a=0x0,_0x2e69b1=!0x1,_0x3b2ef2,_0x1ec59c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2e90c6['depth']){if(_0x443a68){if(_0x4ce0a7=_0x1babfb[_0x33bfa3(0x1ee)],_0x4ce0a7>_0x2e90c6['elements']){for(_0x5c981d=0x0,_0x3de9f4=_0x2e90c6[_0x33bfa3(0x1f7)],_0x2e727d=_0x5c981d;_0x2e727d<_0x3de9f4;_0x2e727d++)_0x1fd1ab['push'](_0x168568[_0x33bfa3(0x223)](_0x2ee350,_0x1babfb,_0x4e2612,_0x2e727d,_0x2e90c6));_0x254f7f[_0x33bfa3(0x228)]=!0x0;}else{for(_0x5c981d=0x0,_0x3de9f4=_0x4ce0a7,_0x2e727d=_0x5c981d;_0x2e727d<_0x3de9f4;_0x2e727d++)_0x1fd1ab['push'](_0x168568[_0x33bfa3(0x223)](_0x2ee350,_0x1babfb,_0x4e2612,_0x2e727d,_0x2e90c6));}_0x2e90c6['autoExpandPropertyCount']+=_0x1fd1ab[_0x33bfa3(0x1ee)];}if(!(_0x4e2612===_0x33bfa3(0x2d8)||_0x4e2612===_0x33bfa3(0x2cd))&&!_0x4ec234&&_0x4e2612!=='String'&&_0x4e2612!==_0x33bfa3(0x252)&&_0x4e2612!==_0x33bfa3(0x267)){var _0x2d45fa=_0xdb54a9[_0x33bfa3(0x1ef)]||_0x2e90c6[_0x33bfa3(0x1ef)];if(this['_isSet'](_0x1babfb)?(_0x2e727d=0x0,_0x1babfb[_0x33bfa3(0x2c8)](function(_0x3b3e4c){var _0x118b02=_0x33bfa3;if(_0x4a200a++,_0x2e90c6['autoExpandPropertyCount']++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;return;}if(!_0x2e90c6[_0x118b02(0x2af)]&&_0x2e90c6['autoExpand']&&_0x2e90c6[_0x118b02(0x28f)]>_0x2e90c6[_0x118b02(0x28a)]){_0x2e69b1=!0x0;return;}_0x1fd1ab[_0x118b02(0x2e0)](_0x168568[_0x118b02(0x223)](_0x2ee350,_0x1babfb,'Set',_0x2e727d++,_0x2e90c6,function(_0xba6f7b){return function(){return _0xba6f7b;};}(_0x3b3e4c)));})):this[_0x33bfa3(0x2ea)](_0x1babfb)&&_0x1babfb[_0x33bfa3(0x2c8)](function(_0x26b876,_0x1cd31e){var _0x13d9e6=_0x33bfa3;if(_0x4a200a++,_0x2e90c6[_0x13d9e6(0x28f)]++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;return;}if(!_0x2e90c6[_0x13d9e6(0x2af)]&&_0x2e90c6[_0x13d9e6(0x2bf)]&&_0x2e90c6[_0x13d9e6(0x28f)]>_0x2e90c6[_0x13d9e6(0x28a)]){_0x2e69b1=!0x0;return;}var _0x5245d5=_0x1cd31e[_0x13d9e6(0x269)]();_0x5245d5['length']>0x64&&(_0x5245d5=_0x5245d5[_0x13d9e6(0x232)](0x0,0x64)+'...'),_0x1fd1ab[_0x13d9e6(0x2e0)](_0x168568['_addProperty'](_0x2ee350,_0x1babfb,_0x13d9e6(0x283),_0x5245d5,_0x2e90c6,function(_0x437b32){return function(){return _0x437b32;};}(_0x26b876)));}),!_0xf19808){try{for(_0x5481d5 in _0x1babfb)if(!(_0x443a68&&_0x1ec59c[_0x33bfa3(0x25d)](_0x5481d5))&&!this[_0x33bfa3(0x251)](_0x1babfb,_0x5481d5,_0x2e90c6)){if(_0x4a200a++,_0x2e90c6['autoExpandPropertyCount']++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;break;}if(!_0x2e90c6['isExpressionToEvaluate']&&_0x2e90c6[_0x33bfa3(0x2bf)]&&_0x2e90c6[_0x33bfa3(0x28f)]>_0x2e90c6[_0x33bfa3(0x28a)]){_0x2e69b1=!0x0;break;}_0x1fd1ab[_0x33bfa3(0x2e0)](_0x168568[_0x33bfa3(0x1dd)](_0x2ee350,_0x5d7eb8,_0x1babfb,_0x4e2612,_0x5481d5,_0x2e90c6));}}catch{}if(_0x5d7eb8[_0x33bfa3(0x214)]=!0x0,_0x10ecde&&(_0x5d7eb8[_0x33bfa3(0x248)]=!0x0),!_0x2e69b1){var _0x4a9287=[][_0x33bfa3(0x29c)](this[_0x33bfa3(0x202)](_0x1babfb))['concat'](this[_0x33bfa3(0x2c1)](_0x1babfb));for(_0x2e727d=0x0,_0x4ce0a7=_0x4a9287[_0x33bfa3(0x1ee)];_0x2e727d<_0x4ce0a7;_0x2e727d++)if(_0x5481d5=_0x4a9287[_0x2e727d],!(_0x443a68&&_0x1ec59c[_0x33bfa3(0x25d)](_0x5481d5['toString']()))&&!this[_0x33bfa3(0x251)](_0x1babfb,_0x5481d5,_0x2e90c6)&&!_0x5d7eb8[typeof _0x5481d5!=_0x33bfa3(0x2ca)?_0x33bfa3(0x2ba)+_0x5481d5['toString']():_0x5481d5]){if(_0x4a200a++,_0x2e90c6[_0x33bfa3(0x28f)]++,_0x4a200a>_0x2d45fa){_0x2e69b1=!0x0;break;}if(!_0x2e90c6[_0x33bfa3(0x2af)]&&_0x2e90c6[_0x33bfa3(0x2bf)]&&_0x2e90c6[_0x33bfa3(0x28f)]>_0x2e90c6[_0x33bfa3(0x28a)]){_0x2e69b1=!0x0;break;}_0x1fd1ab['push'](_0x168568[_0x33bfa3(0x1dd)](_0x2ee350,_0x5d7eb8,_0x1babfb,_0x4e2612,_0x5481d5,_0x2e90c6));}}}}}if(_0x254f7f['type']=_0x4e2612,_0x21daba?(_0x254f7f[_0x33bfa3(0x2e9)]=_0x1babfb[_0x33bfa3(0x2b8)](),this[_0x33bfa3(0x298)](_0x4e2612,_0x254f7f,_0x2e90c6,_0xdb54a9)):_0x4e2612===_0x33bfa3(0x24d)?_0x254f7f[_0x33bfa3(0x2e9)]=this[_0x33bfa3(0x2aa)]['call'](_0x1babfb):_0x4e2612===_0x33bfa3(0x267)?_0x254f7f[_0x33bfa3(0x2e9)]=_0x1babfb['toString']():_0x4e2612===_0x33bfa3(0x285)?_0x254f7f['value']=this[_0x33bfa3(0x215)][_0x33bfa3(0x1ec)](_0x1babfb):_0x4e2612===_0x33bfa3(0x2ca)&&this[_0x33bfa3(0x2cc)]?_0x254f7f[_0x33bfa3(0x2e9)]=this[_0x33bfa3(0x2cc)]['prototype'][_0x33bfa3(0x269)]['call'](_0x1babfb):!_0x2e90c6[_0x33bfa3(0x2d4)]&&!(_0x4e2612===_0x33bfa3(0x2d8)||_0x4e2612===_0x33bfa3(0x2cd))&&(delete _0x254f7f[_0x33bfa3(0x2e9)],_0x254f7f[_0x33bfa3(0x20c)]=!0x0),_0x2e69b1&&(_0x254f7f['cappedProps']=!0x0),_0x3b2ef2=_0x2e90c6[_0x33bfa3(0x286)][_0x33bfa3(0x200)],_0x2e90c6['node'][_0x33bfa3(0x200)]=_0x254f7f,this['_treeNodePropertiesBeforeFullValue'](_0x254f7f,_0x2e90c6),_0x1fd1ab['length']){for(_0x2e727d=0x0,_0x4ce0a7=_0x1fd1ab['length'];_0x2e727d<_0x4ce0a7;_0x2e727d++)_0x1fd1ab[_0x2e727d](_0x2e727d);}_0x2ee350[_0x33bfa3(0x1ee)]&&(_0x254f7f[_0x33bfa3(0x1ef)]=_0x2ee350);}catch(_0x36e778){_0x3a3c67(_0x36e778,_0x254f7f,_0x2e90c6);}this[_0x33bfa3(0x2c7)](_0x1babfb,_0x254f7f),this[_0x33bfa3(0x2e5)](_0x254f7f,_0x2e90c6),_0x2e90c6[_0x33bfa3(0x286)][_0x33bfa3(0x200)]=_0x3b2ef2,_0x2e90c6[_0x33bfa3(0x2c9)]--,_0x2e90c6[_0x33bfa3(0x2bf)]=_0x471824,_0x2e90c6['autoExpand']&&_0x2e90c6[_0x33bfa3(0x1e2)][_0x33bfa3(0x27e)]();}finally{_0x361300&&(_0x1b046d['console'][_0x33bfa3(0x29e)]=_0x361300),_0x7450c3&&(_0x1b046d[_0x33bfa3(0x1e7)][_0x33bfa3(0x213)]=_0x7450c3),_0x1b046d[_0x33bfa3(0x240)]=_0x1f473b;}return _0x254f7f;},_0x39602c[_0x1f5d44(0x27c)]['_getOwnPropertySymbols']=function(_0xd19fef){var _0x1f8178=_0x1f5d44;return Object['getOwnPropertySymbols']?Object[_0x1f8178(0x209)](_0xd19fef):[];},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x219)]=function(_0x5ece89){var _0x396459=_0x1f5d44;return!!(_0x5ece89&&_0x1b046d['Set']&&this[_0x396459(0x2a0)](_0x5ece89)===_0x396459(0x2ce)&&_0x5ece89[_0x396459(0x2c8)]);},_0x39602c['prototype'][_0x1f5d44(0x251)]=function(_0x5e3ecf,_0x457efe,_0x503699){var _0x58ab93=_0x1f5d44;if(!_0x503699[_0x58ab93(0x226)]){let _0x40a764=this['_getOwnPropertyDescriptor'](_0x5e3ecf,_0x457efe);if(_0x40a764&&_0x40a764[_0x58ab93(0x1eb)])return!0x0;}return _0x503699[_0x58ab93(0x1f5)]?typeof _0x5e3ecf[_0x457efe]==_0x58ab93(0x230):!0x1;},_0x39602c['prototype'][_0x1f5d44(0x297)]=function(_0x55aea2){var _0x3223a6=_0x1f5d44,_0x435cfc='';return _0x435cfc=typeof _0x55aea2,_0x435cfc===_0x3223a6(0x26a)?this[_0x3223a6(0x2a0)](_0x55aea2)==='[object\\x20Array]'?_0x435cfc=_0x3223a6(0x260):this['_objectToString'](_0x55aea2)===_0x3223a6(0x287)?_0x435cfc=_0x3223a6(0x24d):this['_objectToString'](_0x55aea2)===_0x3223a6(0x2bc)?_0x435cfc=_0x3223a6(0x267):_0x55aea2===null?_0x435cfc='null':_0x55aea2[_0x3223a6(0x277)]&&(_0x435cfc=_0x55aea2[_0x3223a6(0x277)][_0x3223a6(0x273)]||_0x435cfc):_0x435cfc===_0x3223a6(0x2cd)&&this[_0x3223a6(0x26f)]&&_0x55aea2 instanceof this[_0x3223a6(0x26f)]&&(_0x435cfc=_0x3223a6(0x23a)),_0x435cfc;},_0x39602c['prototype'][_0x1f5d44(0x2a0)]=function(_0x2bac5a){var _0x4622cb=_0x1f5d44;return Object['prototype'][_0x4622cb(0x269)][_0x4622cb(0x1ec)](_0x2bac5a);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x1fc)]=function(_0x2ccf2c){var _0x674b58=_0x1f5d44;return _0x2ccf2c===_0x674b58(0x1e0)||_0x2ccf2c===_0x674b58(0x1f2)||_0x2ccf2c===_0x674b58(0x2e8);},_0x39602c[_0x1f5d44(0x27c)]['_isPrimitiveWrapperType']=function(_0x5299e2){var _0x55fd87=_0x1f5d44;return _0x5299e2===_0x55fd87(0x2d5)||_0x5299e2==='String'||_0x5299e2===_0x55fd87(0x245);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x223)]=function(_0x157555,_0x1174b0,_0x2697a9,_0x20ea02,_0x1e29d4,_0x5f3380){var _0x174700=this;return function(_0x3816dd){var _0x4b6516=_0x4187,_0x57f376=_0x1e29d4[_0x4b6516(0x286)][_0x4b6516(0x200)],_0xed0e7b=_0x1e29d4[_0x4b6516(0x286)]['index'],_0x57849c=_0x1e29d4['node'][_0x4b6516(0x261)];_0x1e29d4['node']['parent']=_0x57f376,_0x1e29d4[_0x4b6516(0x286)]['index']=typeof _0x20ea02==_0x4b6516(0x2e8)?_0x20ea02:_0x3816dd,_0x157555[_0x4b6516(0x2e0)](_0x174700[_0x4b6516(0x208)](_0x1174b0,_0x2697a9,_0x20ea02,_0x1e29d4,_0x5f3380)),_0x1e29d4[_0x4b6516(0x286)]['parent']=_0x57849c,_0x1e29d4['node'][_0x4b6516(0x2b4)]=_0xed0e7b;};},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x1dd)]=function(_0x16666b,_0x37b24a,_0xca6b76,_0x5eaca8,_0x47f24d,_0x518bd1,_0x3aad4c){var _0x5a59c9=_0x1f5d44,_0x5d7f32=this;return _0x37b24a[typeof _0x47f24d!=_0x5a59c9(0x2ca)?_0x5a59c9(0x2ba)+_0x47f24d['toString']():_0x47f24d]=!0x0,function(_0x186abb){var _0x227537=_0x5a59c9,_0x93753=_0x518bd1[_0x227537(0x286)]['current'],_0x3a8b46=_0x518bd1[_0x227537(0x286)][_0x227537(0x2b4)],_0x5cf7ec=_0x518bd1[_0x227537(0x286)]['parent'];_0x518bd1[_0x227537(0x286)]['parent']=_0x93753,_0x518bd1['node'][_0x227537(0x2b4)]=_0x186abb,_0x16666b[_0x227537(0x2e0)](_0x5d7f32[_0x227537(0x208)](_0xca6b76,_0x5eaca8,_0x47f24d,_0x518bd1,_0x3aad4c)),_0x518bd1[_0x227537(0x286)][_0x227537(0x261)]=_0x5cf7ec,_0x518bd1[_0x227537(0x286)]['index']=_0x3a8b46;};},_0x39602c[_0x1f5d44(0x27c)]['_property']=function(_0x1e9096,_0x2437b1,_0x5a258e,_0x306875,_0xeb1ab2){var _0x2e8b77=_0x1f5d44,_0x1ab203=this;_0xeb1ab2||(_0xeb1ab2=function(_0x2125a7,_0x5a8e51){return _0x2125a7[_0x5a8e51];});var _0x1a70b4=_0x5a258e[_0x2e8b77(0x269)](),_0x4a3b80=_0x306875[_0x2e8b77(0x27f)]||{},_0x4ec463=_0x306875[_0x2e8b77(0x2d4)],_0x436a10=_0x306875['isExpressionToEvaluate'];try{var _0x4a65f6=this[_0x2e8b77(0x2ea)](_0x1e9096),_0x14070f=_0x1a70b4;_0x4a65f6&&_0x14070f[0x0]==='\\x27'&&(_0x14070f=_0x14070f[_0x2e8b77(0x24a)](0x1,_0x14070f['length']-0x2));var _0x33f2fd=_0x306875[_0x2e8b77(0x27f)]=_0x4a3b80[_0x2e8b77(0x2ba)+_0x14070f];_0x33f2fd&&(_0x306875['depth']=_0x306875[_0x2e8b77(0x2d4)]+0x1),_0x306875['isExpressionToEvaluate']=!!_0x33f2fd;var _0x761c47=typeof _0x5a258e==_0x2e8b77(0x2ca),_0x2a07c1={'name':_0x761c47||_0x4a65f6?_0x1a70b4:this['_propertyName'](_0x1a70b4)};if(_0x761c47&&(_0x2a07c1[_0x2e8b77(0x2ca)]=!0x0),!(_0x2437b1===_0x2e8b77(0x260)||_0x2437b1===_0x2e8b77(0x2e7))){var _0x336b0f=this[_0x2e8b77(0x212)](_0x1e9096,_0x5a258e);if(_0x336b0f&&(_0x336b0f[_0x2e8b77(0x257)]&&(_0x2a07c1['setter']=!0x0),_0x336b0f[_0x2e8b77(0x1eb)]&&!_0x33f2fd&&!_0x306875[_0x2e8b77(0x226)]))return _0x2a07c1['getter']=!0x0,this[_0x2e8b77(0x237)](_0x2a07c1,_0x306875),_0x2a07c1;}var _0x42b0f3;try{_0x42b0f3=_0xeb1ab2(_0x1e9096,_0x5a258e);}catch(_0x470aa0){return _0x2a07c1={'name':_0x1a70b4,'type':_0x2e8b77(0x2a8),'error':_0x470aa0[_0x2e8b77(0x1ff)]},this[_0x2e8b77(0x237)](_0x2a07c1,_0x306875),_0x2a07c1;}var _0x3f69d6=this[_0x2e8b77(0x297)](_0x42b0f3),_0x26ec12=this[_0x2e8b77(0x1fc)](_0x3f69d6);if(_0x2a07c1['type']=_0x3f69d6,_0x26ec12)this['_processTreeNodeResult'](_0x2a07c1,_0x306875,_0x42b0f3,function(){var _0x27d61e=_0x2e8b77;_0x2a07c1[_0x27d61e(0x2e9)]=_0x42b0f3[_0x27d61e(0x2b8)](),!_0x33f2fd&&_0x1ab203[_0x27d61e(0x298)](_0x3f69d6,_0x2a07c1,_0x306875,{});});else{var _0x353800=_0x306875[_0x2e8b77(0x2bf)]&&_0x306875[_0x2e8b77(0x2c9)]<_0x306875[_0x2e8b77(0x21f)]&&_0x306875[_0x2e8b77(0x1e2)][_0x2e8b77(0x229)](_0x42b0f3)<0x0&&_0x3f69d6!==_0x2e8b77(0x230)&&_0x306875['autoExpandPropertyCount']<_0x306875[_0x2e8b77(0x28a)];_0x353800||_0x306875[_0x2e8b77(0x2c9)]<_0x4ec463||_0x33f2fd?this['serialize'](_0x2a07c1,_0x42b0f3,_0x306875,_0x33f2fd||{}):this[_0x2e8b77(0x237)](_0x2a07c1,_0x306875,_0x42b0f3,function(){var _0x26b4af=_0x2e8b77;_0x3f69d6==='null'||_0x3f69d6===_0x26b4af(0x2cd)||(delete _0x2a07c1[_0x26b4af(0x2e9)],_0x2a07c1[_0x26b4af(0x20c)]=!0x0);});}return _0x2a07c1;}finally{_0x306875[_0x2e8b77(0x27f)]=_0x4a3b80,_0x306875[_0x2e8b77(0x2d4)]=_0x4ec463,_0x306875[_0x2e8b77(0x2af)]=_0x436a10;}},_0x39602c[_0x1f5d44(0x27c)]['_capIfString']=function(_0x400724,_0x56f824,_0x52035a,_0x2a5d1b){var _0x1c76fb=_0x1f5d44,_0x5d1231=_0x2a5d1b[_0x1c76fb(0x23c)]||_0x52035a[_0x1c76fb(0x23c)];if((_0x400724===_0x1c76fb(0x1f2)||_0x400724===_0x1c76fb(0x23b))&&_0x56f824[_0x1c76fb(0x2e9)]){let _0x1dff43=_0x56f824[_0x1c76fb(0x2e9)][_0x1c76fb(0x1ee)];_0x52035a[_0x1c76fb(0x2b7)]+=_0x1dff43,_0x52035a[_0x1c76fb(0x2b7)]>_0x52035a[_0x1c76fb(0x1de)]?(_0x56f824[_0x1c76fb(0x20c)]='',delete _0x56f824[_0x1c76fb(0x2e9)]):_0x1dff43>_0x5d1231&&(_0x56f824[_0x1c76fb(0x20c)]=_0x56f824['value'][_0x1c76fb(0x24a)](0x0,_0x5d1231),delete _0x56f824[_0x1c76fb(0x2e9)]);}},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2ea)]=function(_0x2b582){var _0x4f59b4=_0x1f5d44;return!!(_0x2b582&&_0x1b046d[_0x4f59b4(0x283)]&&this[_0x4f59b4(0x2a0)](_0x2b582)===_0x4f59b4(0x2d2)&&_0x2b582[_0x4f59b4(0x2c8)]);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x1ed)]=function(_0xd0769c){var _0x56daad=_0x1f5d44;if(_0xd0769c[_0x56daad(0x207)](/^\\d+$/))return _0xd0769c;var _0x44321c;try{_0x44321c=JSON[_0x56daad(0x274)](''+_0xd0769c);}catch{_0x44321c='\\x22'+this[_0x56daad(0x2a0)](_0xd0769c)+'\\x22';}return _0x44321c[_0x56daad(0x207)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x44321c=_0x44321c[_0x56daad(0x24a)](0x1,_0x44321c[_0x56daad(0x1ee)]-0x2):_0x44321c=_0x44321c[_0x56daad(0x2c4)](/'/g,'\\x5c\\x27')[_0x56daad(0x2c4)](/\\\\\"/g,'\\x22')[_0x56daad(0x2c4)](/(^\"|\"$)/g,'\\x27'),_0x44321c;},_0x39602c[_0x1f5d44(0x27c)]['_processTreeNodeResult']=function(_0x35d4de,_0x18bf2b,_0x4b4ba8,_0x5e4ad4){var _0x3ae3b4=_0x1f5d44;this[_0x3ae3b4(0x24f)](_0x35d4de,_0x18bf2b),_0x5e4ad4&&_0x5e4ad4(),this[_0x3ae3b4(0x2c7)](_0x4b4ba8,_0x35d4de),this['_treeNodePropertiesAfterFullValue'](_0x35d4de,_0x18bf2b);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x24f)]=function(_0x3fef10,_0x16c344){var _0x25886e=_0x1f5d44;this[_0x25886e(0x275)](_0x3fef10,_0x16c344),this[_0x25886e(0x2d1)](_0x3fef10,_0x16c344),this[_0x25886e(0x239)](_0x3fef10,_0x16c344),this['_setNodePermissions'](_0x3fef10,_0x16c344);},_0x39602c['prototype'][_0x1f5d44(0x275)]=function(_0x4a95cf,_0x5175f9){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2d1)]=function(_0x4dd70e,_0x1d0a77){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x250)]=function(_0x2add9b,_0x21294a){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x241)]=function(_0x57f907){return _0x57f907===this['_undefined'];},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2e5)]=function(_0x47895e,_0x5ee6d0){var _0x3bb2e6=_0x1f5d44;this[_0x3bb2e6(0x250)](_0x47895e,_0x5ee6d0),this['_setNodeExpandableState'](_0x47895e),_0x5ee6d0[_0x3bb2e6(0x2c3)]&&this[_0x3bb2e6(0x288)](_0x47895e),this[_0x3bb2e6(0x2db)](_0x47895e,_0x5ee6d0),this[_0x3bb2e6(0x23e)](_0x47895e,_0x5ee6d0),this[_0x3bb2e6(0x2ab)](_0x47895e);},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x2c7)]=function(_0x406f89,_0x5dc600){var _0x3d052f=_0x1f5d44;try{_0x406f89&&typeof _0x406f89[_0x3d052f(0x1ee)]==_0x3d052f(0x2e8)&&(_0x5dc600[_0x3d052f(0x1ee)]=_0x406f89['length']);}catch{}if(_0x5dc600[_0x3d052f(0x27b)]===_0x3d052f(0x2e8)||_0x5dc600[_0x3d052f(0x27b)]===_0x3d052f(0x245)){if(isNaN(_0x5dc600['value']))_0x5dc600[_0x3d052f(0x299)]=!0x0,delete _0x5dc600[_0x3d052f(0x2e9)];else switch(_0x5dc600['value']){case Number[_0x3d052f(0x1f9)]:_0x5dc600['positiveInfinity']=!0x0,delete _0x5dc600['value'];break;case Number['NEGATIVE_INFINITY']:_0x5dc600[_0x3d052f(0x25c)]=!0x0,delete _0x5dc600[_0x3d052f(0x2e9)];break;case 0x0:this[_0x3d052f(0x247)](_0x5dc600['value'])&&(_0x5dc600['negativeZero']=!0x0);break;}}else _0x5dc600[_0x3d052f(0x27b)]===_0x3d052f(0x230)&&typeof _0x406f89[_0x3d052f(0x273)]=='string'&&_0x406f89[_0x3d052f(0x273)]&&_0x5dc600[_0x3d052f(0x273)]&&_0x406f89[_0x3d052f(0x273)]!==_0x5dc600['name']&&(_0x5dc600[_0x3d052f(0x218)]=_0x406f89[_0x3d052f(0x273)]);},_0x39602c['prototype'][_0x1f5d44(0x247)]=function(_0x58bf0d){var _0x1eeae2=_0x1f5d44;return 0x1/_0x58bf0d===Number[_0x1eeae2(0x210)];},_0x39602c[_0x1f5d44(0x27c)]['_sortProps']=function(_0x4d7dd2){var _0x5c6f19=_0x1f5d44;!_0x4d7dd2['props']||!_0x4d7dd2[_0x5c6f19(0x1ef)]['length']||_0x4d7dd2['type']===_0x5c6f19(0x260)||_0x4d7dd2[_0x5c6f19(0x27b)]===_0x5c6f19(0x283)||_0x4d7dd2[_0x5c6f19(0x27b)]===_0x5c6f19(0x22b)||_0x4d7dd2[_0x5c6f19(0x1ef)][_0x5c6f19(0x1e3)](function(_0xb25f8,_0x3feabb){var _0x34181c=_0x5c6f19,_0x30ed1b=_0xb25f8[_0x34181c(0x273)][_0x34181c(0x2b3)](),_0x28978d=_0x3feabb['name'][_0x34181c(0x2b3)]();return _0x30ed1b<_0x28978d?-0x1:_0x30ed1b>_0x28978d?0x1:0x0;});},_0x39602c[_0x1f5d44(0x27c)]['_addFunctionsNode']=function(_0x5294e5,_0x377958){var _0x476737=_0x1f5d44;if(!(_0x377958[_0x476737(0x1f5)]||!_0x5294e5[_0x476737(0x1ef)]||!_0x5294e5['props'][_0x476737(0x1ee)])){for(var _0x23c633=[],_0x1cff31=[],_0x44160d=0x0,_0x4684cd=_0x5294e5['props'][_0x476737(0x1ee)];_0x44160d<_0x4684cd;_0x44160d++){var _0x36796e=_0x5294e5['props'][_0x44160d];_0x36796e[_0x476737(0x27b)]===_0x476737(0x230)?_0x23c633[_0x476737(0x2e0)](_0x36796e):_0x1cff31[_0x476737(0x2e0)](_0x36796e);}if(!(!_0x1cff31[_0x476737(0x1ee)]||_0x23c633[_0x476737(0x1ee)]<=0x1)){_0x5294e5[_0x476737(0x1ef)]=_0x1cff31;var _0x1e6ca0={'functionsNode':!0x0,'props':_0x23c633};this[_0x476737(0x275)](_0x1e6ca0,_0x377958),this[_0x476737(0x250)](_0x1e6ca0,_0x377958),this[_0x476737(0x2df)](_0x1e6ca0),this[_0x476737(0x1e4)](_0x1e6ca0,_0x377958),_0x1e6ca0['id']+='\\x20f',_0x5294e5[_0x476737(0x1ef)][_0x476737(0x21b)](_0x1e6ca0);}}},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x23e)]=function(_0xc708e1,_0x1404ba){},_0x39602c['prototype']['_setNodeExpandableState']=function(_0x44d604){},_0x39602c[_0x1f5d44(0x27c)][_0x1f5d44(0x22d)]=function(_0x3c17fb){var _0x14eb98=_0x1f5d44;return Array[_0x14eb98(0x2a1)](_0x3c17fb)||typeof _0x3c17fb==_0x14eb98(0x26a)&&this['_objectToString'](_0x3c17fb)===_0x14eb98(0x21c);},_0x39602c[_0x1f5d44(0x27c)]['_setNodePermissions']=function(_0x1360b0,_0x443f96){},_0x39602c[_0x1f5d44(0x27c)]['_cleanNode']=function(_0x26f307){var _0x360d43=_0x1f5d44;delete _0x26f307[_0x360d43(0x1f0)],delete _0x26f307['_hasSetOnItsPath'],delete _0x26f307[_0x360d43(0x2de)];},_0x39602c['prototype'][_0x1f5d44(0x239)]=function(_0x21594a,_0x1ea38a){};let _0x4fccde=new _0x39602c(),_0x5aef3e={'props':_0x39e136['defaultLimits'][_0x1f5d44(0x1ef)]||0x64,'elements':_0x39e136['defaultLimits']['elements']||0x64,'strLength':_0x39e136[_0x1f5d44(0x1dc)][_0x1f5d44(0x23c)]||0x400*0x32,'totalStrLength':_0x39e136['defaultLimits'][_0x1f5d44(0x1de)]||0x400*0x32,'autoExpandLimit':_0x39e136['defaultLimits'][_0x1f5d44(0x28a)]||0x1388,'autoExpandMaxDepth':_0x39e136['defaultLimits'][_0x1f5d44(0x21f)]||0xa},_0x374151={'props':_0x39e136[_0x1f5d44(0x225)][_0x1f5d44(0x1ef)]||0x5,'elements':_0x39e136[_0x1f5d44(0x225)][_0x1f5d44(0x1f7)]||0x5,'strLength':_0x39e136[_0x1f5d44(0x225)]['strLength']||0x100,'totalStrLength':_0x39e136[_0x1f5d44(0x225)][_0x1f5d44(0x1de)]||0x100*0x3,'autoExpandLimit':_0x39e136['reducedLimits'][_0x1f5d44(0x28a)]||0x1e,'autoExpandMaxDepth':_0x39e136['reducedLimits']['autoExpandMaxDepth']||0x2};if(_0x5d8b23){let _0x275f95=_0x4fccde['serialize'][_0x1f5d44(0x262)](_0x4fccde);_0x4fccde[_0x1f5d44(0x2b2)]=function(_0x1c90b2,_0x4276f3,_0x30aacd,_0x55932d){return _0x275f95(_0x1c90b2,_0x5d8b23(_0x4276f3),_0x30aacd,_0x55932d);};}function _0x1a7762(_0x577f01,_0x418059,_0x269690,_0x32321b,_0x4cd5b2,_0x52912d){var _0x4ce86f=_0x1f5d44;let _0x3eb726,_0xb700fa;try{_0xb700fa=_0x5553e9(),_0x3eb726=_0x5b51f5[_0x418059],!_0x3eb726||_0xb700fa-_0x3eb726['ts']>_0x4756a1[_0x4ce86f(0x291)][_0x4ce86f(0x264)]&&_0x3eb726['count']&&_0x3eb726[_0x4ce86f(0x255)]/_0x3eb726[_0x4ce86f(0x238)]<_0x4756a1['perLogpoint']['resetOnProcessingTimeAverageMs']?(_0x5b51f5[_0x418059]=_0x3eb726={'count':0x0,'time':0x0,'ts':_0xb700fa},_0x5b51f5[_0x4ce86f(0x206)]={}):_0xb700fa-_0x5b51f5['hits']['ts']>_0x4756a1['global']['resetWhenQuietMs']&&_0x5b51f5['hits']['count']&&_0x5b51f5[_0x4ce86f(0x206)]['time']/_0x5b51f5['hits'][_0x4ce86f(0x238)]<_0x4756a1['global'][_0x4ce86f(0x231)]&&(_0x5b51f5[_0x4ce86f(0x206)]={});let _0x41ced7=[],_0x1fbc3d=_0x3eb726['reduceLimits']||_0x5b51f5['hits']['reduceLimits']?_0x374151:_0x5aef3e,_0x2da3f7=_0x3d6b99=>{var _0x44db24=_0x4ce86f;let _0x4c46fe={};return _0x4c46fe[_0x44db24(0x1ef)]=_0x3d6b99[_0x44db24(0x1ef)],_0x4c46fe['elements']=_0x3d6b99[_0x44db24(0x1f7)],_0x4c46fe[_0x44db24(0x23c)]=_0x3d6b99[_0x44db24(0x23c)],_0x4c46fe['totalStrLength']=_0x3d6b99[_0x44db24(0x1de)],_0x4c46fe[_0x44db24(0x28a)]=_0x3d6b99[_0x44db24(0x28a)],_0x4c46fe[_0x44db24(0x21f)]=_0x3d6b99[_0x44db24(0x21f)],_0x4c46fe[_0x44db24(0x2c3)]=!0x1,_0x4c46fe[_0x44db24(0x1f5)]=!_0x3af781,_0x4c46fe[_0x44db24(0x2d4)]=0x1,_0x4c46fe['level']=0x0,_0x4c46fe[_0x44db24(0x1fb)]=_0x44db24(0x29b),_0x4c46fe[_0x44db24(0x296)]='root_exp',_0x4c46fe[_0x44db24(0x2bf)]=!0x0,_0x4c46fe[_0x44db24(0x1e2)]=[],_0x4c46fe[_0x44db24(0x28f)]=0x0,_0x4c46fe[_0x44db24(0x226)]=_0x39e136[_0x44db24(0x226)],_0x4c46fe[_0x44db24(0x2b7)]=0x0,_0x4c46fe[_0x44db24(0x286)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x4c46fe;};for(var _0x42e392=0x0;_0x42e392<_0x4cd5b2[_0x4ce86f(0x1ee)];_0x42e392++)_0x41ced7[_0x4ce86f(0x2e0)](_0x4fccde[_0x4ce86f(0x2b2)]({'timeNode':_0x577f01==='time'||void 0x0},_0x4cd5b2[_0x42e392],_0x2da3f7(_0x1fbc3d),{}));if(_0x577f01===_0x4ce86f(0x29f)||_0x577f01===_0x4ce86f(0x29e)){let _0x4f7582=Error['stackTraceLimit'];try{Error[_0x4ce86f(0x221)]=0x1/0x0,_0x41ced7['push'](_0x4fccde[_0x4ce86f(0x2b2)]({'stackNode':!0x0},new Error()[_0x4ce86f(0x22e)],_0x2da3f7(_0x1fbc3d),{'strLength':0x1/0x0}));}finally{Error[_0x4ce86f(0x221)]=_0x4f7582;}}return{'method':_0x4ce86f(0x2d3),'version':_0x4cee6a,'args':[{'ts':_0x269690,'session':_0x32321b,'args':_0x41ced7,'id':_0x418059,'context':_0x52912d}]};}catch(_0x2a8c31){return{'method':_0x4ce86f(0x2d3),'version':_0x4cee6a,'args':[{'ts':_0x269690,'session':_0x32321b,'args':[{'type':_0x4ce86f(0x2a8),'error':_0x2a8c31&&_0x2a8c31['message']}],'id':_0x418059,'context':_0x52912d}]};}finally{try{if(_0x3eb726&&_0xb700fa){let _0x28b06b=_0x5553e9();_0x3eb726[_0x4ce86f(0x238)]++,_0x3eb726['time']+=_0x13f85b(_0xb700fa,_0x28b06b),_0x3eb726['ts']=_0x28b06b,_0x5b51f5[_0x4ce86f(0x206)]['count']++,_0x5b51f5[_0x4ce86f(0x206)][_0x4ce86f(0x255)]+=_0x13f85b(_0xb700fa,_0x28b06b),_0x5b51f5[_0x4ce86f(0x206)]['ts']=_0x28b06b,(_0x3eb726['count']>_0x4756a1['perLogpoint'][_0x4ce86f(0x1e8)]||_0x3eb726[_0x4ce86f(0x255)]>_0x4756a1[_0x4ce86f(0x291)][_0x4ce86f(0x281)])&&(_0x3eb726[_0x4ce86f(0x201)]=!0x0),(_0x5b51f5[_0x4ce86f(0x206)][_0x4ce86f(0x238)]>_0x4756a1[_0x4ce86f(0x2d7)][_0x4ce86f(0x1e8)]||_0x5b51f5[_0x4ce86f(0x206)][_0x4ce86f(0x255)]>_0x4756a1[_0x4ce86f(0x2d7)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x5b51f5[_0x4ce86f(0x206)]['reduceLimits']=!0x0);}}catch{}}}return _0x1a7762;}function G(_0x372717){var _0x766cc9=_0x3890c8;if(_0x372717&&typeof _0x372717=='object'&&_0x372717[_0x766cc9(0x277)])switch(_0x372717[_0x766cc9(0x277)]['name']){case _0x766cc9(0x256):return _0x372717[_0x766cc9(0x21a)](Symbol['iterator'])?Promise['resolve']():_0x372717;case _0x766cc9(0x1fe):return Promise[_0x766cc9(0x25e)]();}return _0x372717;}((_0xc5752,_0xa30047,_0x3f3995,_0x363a2d,_0x27a42d,_0x5b6f79,_0x45d099,_0x2bc6fb,_0x126cff,_0x1d3c75,_0x2e3f19,_0x464da7)=>{var _0xd5f224=_0x3890c8;if(_0xc5752[_0xd5f224(0x289)])return _0xc5752[_0xd5f224(0x289)];let _0x41b2d1={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0xc5752,_0x2bc6fb,_0x27a42d))return _0xc5752[_0xd5f224(0x289)]=_0x41b2d1,_0xc5752['_console_ninja'];let _0x3886d2=b(_0xc5752),_0x2794c3=_0x3886d2[_0xd5f224(0x276)],_0x44129f=_0x3886d2[_0xd5f224(0x2be)],_0x277b60=_0x3886d2[_0xd5f224(0x2b0)],_0x5b8e52={'hits':{},'ts':{}},_0x1f8b30=J(_0xc5752,_0x126cff,_0x5b8e52,_0x5b6f79,_0x464da7,_0x27a42d===_0xd5f224(0x244)?G:void 0x0),_0x46c143=(_0x82e8dd,_0x59b610,_0x51fdcc,_0x5c78c9,_0x42589f,_0x28db7b)=>{var _0xf273d1=_0xd5f224;let _0x39c71d=_0xc5752[_0xf273d1(0x289)];try{return _0xc5752['_console_ninja']=_0x41b2d1,_0x1f8b30(_0x82e8dd,_0x59b610,_0x51fdcc,_0x5c78c9,_0x42589f,_0x28db7b);}finally{_0xc5752[_0xf273d1(0x289)]=_0x39c71d;}},_0x186fbf=_0x4900f9=>{_0x5b8e52['ts'][_0x4900f9]=_0x44129f();},_0x21fa3c=(_0x242207,_0x1074db)=>{var _0x67dc13=_0xd5f224;let _0x44431a=_0x5b8e52['ts'][_0x1074db];if(delete _0x5b8e52['ts'][_0x1074db],_0x44431a){let _0x41f6fe=_0x2794c3(_0x44431a,_0x44129f());_0x13354f(_0x46c143(_0x67dc13(0x255),_0x242207,_0x277b60(),_0x728f74,[_0x41f6fe],_0x1074db));}},_0x341135=_0x55d522=>{var _0x594af4=_0xd5f224,_0x22d04b;return _0x27a42d==='next.js'&&_0xc5752[_0x594af4(0x224)]&&((_0x22d04b=_0x55d522==null?void 0x0:_0x55d522[_0x594af4(0x2d9)])==null?void 0x0:_0x22d04b[_0x594af4(0x1ee)])&&(_0x55d522[_0x594af4(0x2d9)][0x0][_0x594af4(0x224)]=_0xc5752['origin']),_0x55d522;};_0xc5752['_console_ninja']={'consoleLog':(_0x18a087,_0x257091)=>{var _0x240148=_0xd5f224;_0xc5752[_0x240148(0x1e7)]['log'][_0x240148(0x273)]!==_0x240148(0x227)&&_0x13354f(_0x46c143(_0x240148(0x2d3),_0x18a087,_0x277b60(),_0x728f74,_0x257091));},'consoleTrace':(_0x16338a,_0x54e3f4)=>{var _0x1399d8=_0xd5f224,_0x26a166,_0x49fc60;_0xc5752[_0x1399d8(0x1e7)]['log'][_0x1399d8(0x273)]!==_0x1399d8(0x1e6)&&((_0x49fc60=(_0x26a166=_0xc5752[_0x1399d8(0x266)])==null?void 0x0:_0x26a166[_0x1399d8(0x2a9)])!=null&&_0x49fc60[_0x1399d8(0x286)]&&(_0xc5752[_0x1399d8(0x2a2)]=!0x0),_0x13354f(_0x341135(_0x46c143(_0x1399d8(0x29f),_0x16338a,_0x277b60(),_0x728f74,_0x54e3f4))));},'consoleError':(_0x19664d,_0x4a89b4)=>{var _0x53d07d=_0xd5f224;_0xc5752[_0x53d07d(0x2a2)]=!0x0,_0x13354f(_0x341135(_0x46c143(_0x53d07d(0x29e),_0x19664d,_0x277b60(),_0x728f74,_0x4a89b4)));},'consoleTime':_0x4b8fda=>{_0x186fbf(_0x4b8fda);},'consoleTimeEnd':(_0x53faf9,_0x3ec558)=>{_0x21fa3c(_0x3ec558,_0x53faf9);},'autoLog':(_0x5aeaac,_0x2074bc)=>{_0x13354f(_0x46c143('log',_0x2074bc,_0x277b60(),_0x728f74,[_0x5aeaac]));},'autoLogMany':(_0x3634a2,_0x3fd372)=>{var _0x24da29=_0xd5f224;_0x13354f(_0x46c143(_0x24da29(0x2d3),_0x3634a2,_0x277b60(),_0x728f74,_0x3fd372));},'autoTrace':(_0x5bfb94,_0xee276a)=>{var _0xc67014=_0xd5f224;_0x13354f(_0x341135(_0x46c143(_0xc67014(0x29f),_0xee276a,_0x277b60(),_0x728f74,[_0x5bfb94])));},'autoTraceMany':(_0x29b396,_0x5dc6f1)=>{var _0x6097b4=_0xd5f224;_0x13354f(_0x341135(_0x46c143(_0x6097b4(0x29f),_0x29b396,_0x277b60(),_0x728f74,_0x5dc6f1)));},'autoTime':(_0x1ec463,_0x159318,_0xf6b2dc)=>{_0x186fbf(_0xf6b2dc);},'autoTimeEnd':(_0x3f6263,_0x4ce919,_0x1e750a)=>{_0x21fa3c(_0x4ce919,_0x1e750a);},'coverage':_0x25e683=>{_0x13354f({'method':'coverage','version':_0x5b6f79,'args':[{'id':_0x25e683}]});}};let _0x13354f=H(_0xc5752,_0xa30047,_0x3f3995,_0x363a2d,_0x27a42d,_0x1d3c75,_0x2e3f19),_0x728f74=_0xc5752[_0xd5f224(0x29d)];return _0xc5752[_0xd5f224(0x289)];})(globalThis,'127.0.0.1',_0x3890c8(0x253),_0x3890c8(0x27a),'next.js',_0x3890c8(0x2ac),_0x3890c8(0x2c0),_0x3890c8(0x2e1),_0x3890c8(0x259),_0x3890c8(0x2e4),'1',_0x3890c8(0x211));");
    } catch (e) {
        console.error(e);
    }
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
}),
"[project]/src/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
"use client";
;
;
;
const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"]
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        name: "Twitter",
        href: "https://twitter.com",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "py-12 border-t bg-muted/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.5
                },
                className: "flex flex-col md:flex-row items-center justify-between gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                "Built with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "h-4 w-4 inline text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 26
                                }, this),
                                " by John Doe"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/footer.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: socialLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: link.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-muted-foreground hover:text-foreground transition-colors",
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this)
                            }, link.name, false, {
                                fileName: "[project]/src/components/footer.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/footer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0j3kdgr._.js.map