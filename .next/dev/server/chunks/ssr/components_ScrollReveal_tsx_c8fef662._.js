module.exports = [
"[project]/components/ScrollReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function ScrollReveal() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const els = document.querySelectorAll('.section-enter');
        const obs = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });
        els.forEach((el)=>obs.observe(el));
        return ()=>obs.disconnect();
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=components_ScrollReveal_tsx_c8fef662._.js.map