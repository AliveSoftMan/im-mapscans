(function(t){
    function e(e){
        for(var i, o, s = e[0], l = e[1], c = e[2], p = 0, u = []; p < s.length; p++)
            o=s[p],
            n[o]&&u.push(n[o][0]),
            n[o]=0;
        for(i in l)
        Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);
        d&&d(e);
        while(u.length)u.shift()();
        return r.push.apply(r,c||[]),a()
    }
    function a(){
        for(var t, e = 0; e < r.length; e++) {
            for(var a = r[e], i = !0, s = 1; s < a.length; s++) {
                var l=a[s];
                0!==n[l]&&(i=!1)
            }i&&(r.splice(e--,1),t=o(o.s=a[0]))
        }
        return t
    }
    var i={},
    n={app:0},
    r=[];
    function o(e){
        if(i[e])
            return i[e].exports;
        var a = i[e] = {i:e,l:!1,exports:{}};
        return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports
    }
    o.m=t,
    o.c=i,
    o.d=function(t,e,a){
        o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})
    },
    o.r=function(t){
        "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})
    },
    o.t=function(t,e){
        if(1&e&&(t=o(t)),8&e)
            return t;
        if(4&e&&"object"===typeof t&&t&&t.__esModule)
            return t;
        var a=Object.create(null);
        if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)
            for(var i in t)
                o.d(a,i,function(e){return t[e]}.bind(null,i));
            return a
    },
    o.n=function(t){
        var e=t&&t.__esModule?
            function(){return t["default"]}:
            function(){return t};
            return o.d(e,"a",e),e
    },
    o.o=function(t,e){
        return Object.prototype.hasOwnProperty.call(t,e)
    },
    o.p="/";
    var s=window["webpackJsonp"]=window["webpackJsonp"]||[],
    l=s.push.bind(s);
    s.push=e,s=s.slice();
    for(var c = 0; c < s.length; c++)
        e(s[c]);
    var d=l;
    r.push([0,"chunk-vendors"]),
    a()
})
({
    0:function(t,e,a){
        t.exports=a("56d7")
    },
    "034f":function(t,e,a){
        "use strict";
        var i=a("1356"),
        n=a.n(i);
        n.a
    },
    1161:function(t,e,a){
        "use strict";
        var i=a("15b1"),
        n=a.n(i);
        n.a
    },
    1356:function(t,e,a){},
    "15b1":function(t,e,a){},

    "loadLogo":function(t,e,a){
        t.exports=a.p+"img/logo.png"
    },

    "pdfLogo":function(t,e,a){
        t.exports=a.p+"img/pdf-logo.png"
    },

    2763:function(t,e,a){
        "use strict";
        var i=a("5e70"),n=a.n(i);
        n.a
    },
    "56d7":function(t,e,a){
        "use strict";
        a.r(e);
        a("cadf"),a("551c"),a("f751"),a("097d");
        var n=a("2b0e"),r=a("bb71"),o=a("a722");a("da64");
        n["a"].use(r["a"],{iconfont:"md",components:{VLayout:o["a"]},theme:{primary:"#1a88f0"}});
        var s=function(){
            var t=this,
            e=t.$createElement,
            i=t._self._c||e;

            setTimeout(() => {
                if(!window.debugFlag){

                    t.debug();
                    console.log("debug called");
                    window.debugFlag = true;

                }              
            }, 300);
            
            return i(
                "v-app",
                {attrs:{id:"app"}},
                [

                    0===t.step?
                        i(
                            "div",
                            {attrs:{id:"startscreen"}},
                            [
                                i(
                                    "v-container",
                                    {staticClass:"my-5"},
                                    [
                                        i("v-layout",{attrs:{"align-center":"","justify-center":""}},[i("div",{ref:"geotemp",staticClass:"geotemp1",attrs:{id:"geotemp1"}})])
                                    ],
                                    1
                                )
                            ],
                            1
                        ):
                        t._e(),
                    0!==t.step?
                        i(
                            "v-toolbar",
                            {attrs:{id:"sheet2",color:"#ffffff",dense:""}, staticStyle: {"flex-direction": "column"}},
                            [
                                // i("v-btn",{attrs:{flat:"",disabled:3.1==t.step},on:{click:function(e){return t.backstep()}}},[i("v-icon",{attrs:{dark:""}},[t._v("arrow_back_ios")]),t._v("Back\n    ")],1),
                                0==t.isMobile()?
                                    i(
                                        "v-flex",
                                        {attrs:{"ma-0":"","pa-0":""}, staticStyle:{"width": "100%"}},
                                        [
                                            i(
                                                "v-img",
                                                {
                                                    attrs:{id:"title-logo",contain:!0,src:a("loadLogo"),height:"65","min-width":"100"},
                                                    on:{click:function(e){return t.reload()}}
                                                }
                                            )
                                        ],
                                        1
                                    ):t._e(),
                                i(
                                    "v-flex",
                                    {staticStyle:{"flex-grow":"3 !important", "flex-direction": "column !important", "width": "100%"},attrs:{"ma-0":"","pa-0":""}},
                                    [
                                        i(
                                            "v-stepper",
                                            {staticClass:"stepper",model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},
                                            [
                                                i(
                                                    "v-stepper-header",
                                                    {staticClass:"stepper", staticStyle: {"flex-direction": "column", "color": "white"}},
                                                    [

                                                        i("v-stepper-step",{attrs:{complete:t.step>10, step:"1",primary:""}, staticStyle: {"padding-left": "0"}},[t._v("")]),
                                                        i("v-divider", {staticClass: "select-model-space"}),

                                                        i("v-stepper-step",{attrs:{complete:t.step>10, step:"2",primary:""}, staticStyle: {"padding-left": "0"}},[t._v("DRAW OUT YOUR PLOT")]),
                                                        i("v-divider", {staticClass: "select-model-space" , staticStyle:{"margin-top" : "39px"}} ),

                                                        i("v-stepper-step",{attrs:{complete:t.step>10, step:"3",primary:""}, staticStyle: {"padding-left": "0"}},[t._v("SELECT YOUR MODEL")]),
                                                        i("v-divider", {staticClass: "select-model-space"}),

                                                        i("v-stepper-step",{attrs:{complete:t.step>10, step:"4",primary:""}, staticStyle: {"padding-left": "0"}},[t._v("ROTATE AND MOVE INTO LOCATION")]),
                                                        // i("v-divider"),
                                                        // i("v-stepper-step",{attrs:{complete:t.step>4,step:"4",primary:""}, staticStyle: {"padding-left": "0"}},[t._v("COMPLETE THE FORM TO DOWNLOAD FEASIBILITY")])
                                                    ],
                                                    1
                                                )
                                            ],
                                            1
                                        )
                                    ],
                                    1
                                ),

                                // i(
                                //     "v-img",
                                //     {
                                //         attrs:{id:"title-logo",contain:!0,src:a("loadLogo"),height:"40","min-width":"100"},
                                //         on:{click:function(e){return t.reload()}}
                                //     }
                                // )
                            ],
                            1
                        ):t._e(),

                        // 0!==t.step?
                        // i(
                        //     "v-toolbar",
                        //     {attrs:{id:"sheet2",dense:"", staticStyle:{"background":"none"}}},
                        //     [
                        //         i(
                        //             "v-img",
                        //             {
                        //                 attrs:{id:"title-logo",contain:!0,src:a("loadLogo"),height:"40","min-width":"100"},
                        //                 on:{click:function(e){return t.reload()}}
                        //             }
                        //         )
                        //     ],
                        //     1
                        // ):t._e(),

                    1===t.step?
                        i(
                            "AppStep1", // --------------------------- Readline Step ------------------------------- //
                            {
                                staticStyle:{"z-index":"1"},
                                on:{
                                    stepchanged:function(num){t.step=num},
                                    areachanged:function(e){t.areavalue=e}
                                }
                            }
                        ):t._e(),

                    2===t.step?
                        i(
                            "AppStep2", // -------------------------- Layout Step -------------------------------- //
                            {
                                staticStyle:{"z-index":"1"},
                                attrs:{newarea:t.areavalue},
                                on:{stepchanged:function(num){t.step=num}}
                            }
                        ):t._e(),
                    3===t.step?
                        i(
                            "AppStep3", // -------------------------- Material Step ------------------------------ //
                            {
                                on:{stepchanged:function(num){t.step=3.1}}
                            }
                        ):t._e(),
                    3.1===t.step?
                        i(
                            "AppStep6",
                            {
                                on:{stepchanged:function(num){t.step=3.2}}
                            }
                        ):t._e(),
                    3.2===t.step?
                        i(
                            "AppStep7",
                            {
                                on:{stepchanged:function(num){t.step=4}}
                            }
                        ):t._e(),
                    4===t.step?
                        i("AppStep4"):t._e()
                ],
                1
            )
        },
        l=[],
        createReadlineHTML=function(){
            var t=this,e=t.$createElement,i=t._self._c||e;
            return i(
                "div",
                {staticStyle:{"pointer-events":"none"}},
                [
                    // t.tut&&0==t.tutdismiss1&&t.hint?
                    //     i(
                    //         "v-card",
                    //         {staticStyle:{"z-index":"1",margin:"20px",top:"40px"},attrs:{dense:"","max-width":"192"}},
                    //         [
                    //             i(
                    //                 "video",
                    //                 {attrs:{playsinline:"",autoplay:"autoplay",loop:"loop",muted:""},domProps:{muted:!0}},
                    //                 [i("source",{attrs:{type:"video/mp4",src:a("loadMP4Plot")}})]
                    //             ),
                    //             i("v-card-text",{staticStyle:{padding:"8px"}},[t._v("Click on map to definine area")]),
                    //             i(
                    //                 "v-card-actions",
                    //                 {staticStyle:{padding:"0px"}},
                    //                 [
                    //                     i("v-btn",{attrs:{small:"",flat:""},on:{click:t.hintDisable}},[t._v("Hide Hints")]),
                    //                     i("v-spacer"),
                    //                     i("v-btn",{attrs:{small:"",color:"primary",flat:""},on:{click:function(e){t.tutdismiss1=!0}}},[t._v("Dismiss")])
                    //                 ],
                    //                 1
                    //                 )
                    //         ],
                    //         1
                    //     ):t._e(),
                    i(
                        "v-dialog",
                        {attrs:{persistent:"","max-width":"290"},model:{value:t.Dialog,callback:function(e){t.Dialog=e},expression:"Dialog"}},
                        [
                            i(
                                "v-card",
                                {attrs:{"justify-center":""}},
                                [
                                    i("v-card-title",{staticClass:"headline"},[t._v("Warning")]),
                                    i("v-card-text",[t._v("Your Development is "+t._s(t.areaerror)+" at "+t._s(t.area)+"m²")]),
                                    i(
                                        "v-card-actions",
                                        [
                                            i("v-btn",{attrs:{flat:""},on:{click:t.resetdraw}},[t._v("Retry")]),
                                            i("v-spacer"),
                                            i("v-btn",{attrs:{color:"primary",flat:""} ,on:{click:t.gotoLayout}},[t._v("Continue")])
                                        ],
                                        1
                                    )
                                ],
                                1
                            )
                        ],
                        1
                    ),
                    i(
                        "v-container",
                        {staticStyle:{ padding: 0,  left: "72px",position:"absolute",   top: "192px", width: "252px"},attrs:{"justify-center":"",fluid:""}},
                        [
                            i(
                                "v-toolbar",
                                {attrs:{dense:"",flat:"",color:"rgba(0, 0, 0, 0)"}, staticClass:"plot-div"},
                                [
                                    0!=t.tut&&t.hint?i(
                                        "v-btn-toggle",
                                        {model:{value:t.toggle_point,callback:function(e){t.toggle_point=e},expression:"toggle_point"}},
                                        [
                                            i(
                                                "v-tooltip",
                                                {
                                                    attrs:{top:""},
                                                    scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[
                                                        i(
                                                            "v-btn",
                                                            t._g({on:{click:function(e){return t.point_toggle()}}},a),
                                                            [i("v-icon",[t._v("timeline")])],
                                                            1
                                                        )
                                                    ]}}])
                                                },
                                                [i("span",[t._v("Continuous Mode")])]
                                            )
                                        ],
                                        1
                                    ):t._e()
                                    ,
                                    t.reset?
                                        i("v-btn",{on:{click:t.resetdraw}},[t._v("\n        Reset\n        "),i("v-icon",{attrs:{dark:"",right:""}},[t._v("history")])],1):
                                        i(
                                            "v-btn",
                                            {staticClass:"tooltip",attrs:{color:"primary",dark:""},on:{click:function (e) {

                                                t.draw();
                                                document.getElementById("map").style["z-index"] = 1;
                                                t.$emit("stepchanged",1);

                                            }   }},
                                            [
                                                t._v("\n        Plot\n        "),

                                                i("v-icon",{attrs:{dark:"",right:""}},[t._v("map")])
                                            ],
                                            1
                                        ),

                                    i("v-btn",{staticClass:"white--text" ,attrs:{color:"primary",disabled:1!=t.step1btn},on:{click:t.gotoLayout}},[t._v("Continue")])
                                    
                                ],
                                1
                            )
                        ],
                        1
                    )
                ],
                1
            )
        },
        d=[],
        valuationArea=(
            a("28a5"),
            a("a481"),
            a("6b54"),
            {
                props:[],
                mounted:function(){
                    this.hint=app_hints,
                    map.on("draw.create",this.uArea),
                    map.on("draw.update",this.uArea),
                    map.on("draw.delete",this.uArea),
                    1==draw_multi&&(this.toggle_point=0)
                },
                data:function(){
                    return{
                        area:0,
                        address:null,
                        reset:!1,
                        areaerror:"large",
                        tut:!1,
                        tutdismiss1:!1,
                        drawing:!1,
                        toggle_point:!1,
                        Dialog:!1,
                        hint:!0
                    }
                },
                methods:{
                    draw:function(t){
                        console.log("draw");
                        function e(){
                            return t.apply(this,arguments)
                        }
                        return e.toString=function(){return t.toString()},
                        e
                    }
                    (
                        function(){
                            0==this.drawing?
                                (map.addControl(draw),draw.changeMode("draw_polygon"),this.drawing=!0):
                                (draw.deleteAll(),draw.changeMode("draw_polygon")),
                            this.tut=!0,
                            this.reset=!1,
                            this.area=0
                        }
                    ),
                    resetdraw:function(){
                        draw.deleteAll(),
                        map.removeControl(draw),
                        this.reset=!1,
                        this.tut=!1,
                        this.address=null,
                        this.area=0,
                        this.drawing=!1,
                        this.Dialog=!1
                    },
                    point_toggle:function(){
                        0==draw_multi?
                            (draw_multi=!0,console.log(draw_multi)):
                            (draw_multi=!1,console.log(draw_multi))
                    },
                    uArea:function(){
                        var t=this;
                        this.tutdismiss1=!0,
                        this.reset=!0,
                        this.address=null;
                        var e=draw.getAll();
                        if(e.features.length>0){
                            var a=turf.area(e),
                            n=Math.round(a);
                            mask=e.features[0],
                            this.area=n,
                            (this.area>15e3||this.area<0)&&(this.Dialog=!0),
                            console.log(mask);
                            var r=mask.geometry.coordinates[0];
                            if(!gLng){
                                gLng = r[0][0];
                                gLat = r[0][1];
                            }
                            o=0;
                            for(i=1;i<r.length;i++)for(var s=i+1;s<r.length;s++){var l=1e3*turf.distance(r[i],r[s],"kilometers");l>o&&(o=l)}distance=o,console.log(distance),console.log(this.area);var c=turf.bbox(mask.geometry);map_bbox=[[c[0],c[1]],[c[2],c[3]]],map.fitBounds(map_bbox,{padding:{top:15,bottom:15,left:15,right:15},maxZoom:18}),form_area=n;var d=turf.centroid(e.features[0]),p=d.geometry.coordinates;origin=p;var u=p[0],m=p[1],h="https://api.mapbox.com/geocoding/v5/mapbox.places/"+u+","+m+".json?access_token="+mapboxgl.accessToken;fetch(h).then(function(t){return t.json()}).then(function(e){t.address=e.features[0].place_name,t.address=t.address.replace(/\s+/g,"/"),t.address=t.address.split(",",2),t.address=t.address[0].concat(t.address[1]),form_address=t.address.toUpperCase(),console.log(form_address)})

                        }
                    },
                    gotoLayout:function(){

                        var elementGeo;
                        elementGeo=document.getElementById("geocoder"),
                        elementGeo.style.visibility="hidden",
                        createMask(),
                        this.$emit("areachanged",this.area),
                        this.$emit("stepchanged",2),
                        draw.deleteAll()
                    },
                    hintDisable:function(){this.hint=!1,app_hints=!1},
                    isMobile:function(){
                        return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    }
                },
                computed:{
                    step1btn:function(){
                        plan_area = this.area;
                        return this.area<15e3&&this.area>0?
                            ((()=>{console.log("Area selected correctly")}),!0):
                            (
                                this.area>0?
                                    this.areaerror="over the recomended size (15,000m²)":
                                    this.areaerror="under the recomended size (300m²)",!1
                            )
                    }
                }
            }
        ),
        m=(a("d626"),a("2877")),
        h=a("6544"),
        v=a.n(h),
        f=a("8336"),
        g=a("a609"),
        y=a("b0af"),
        b=a("99d9"),
        w=a("12b2"),
        x=a("a523"),
        _=a("169a"),
        C=a("132d"),
        E=a("9910"),
        k=a("71d9"),
        S=a("3a2f"),
        readlineObj = Object(m["a"])(valuationArea,createReadlineHTML,d,!1,null,null,null),
        appReadline = readlineObj.exports;
        v()(
            readlineObj,
            {
                VBtn:f["a"],
                VBtnToggle:g["a"],
                VCard:y["a"],
                VCardActions:b["a"],
                VCardText:b["b"],
                VCardTitle:w["a"],
                VContainer:x["a"],
                VDialog:_["a"],
                VIcon:C["a"],
                VSpacer:E["a"],
                VToolbar:k["a"],
                VTooltip:S["a"]
            }
        );

        var createLayoutHTML=function(){
            var t=this,
            e=t.$createElement,
            i=t._self._c||e;
            return i(
                "v-container",
                {staticStyle:{"pointer-events":"none"},attrs:{id:"contain",fluid:"","grid-list-md":""}},
                [
                    i(
                        "v-dialog",
                        {staticStyle:{left:"50%",right:"0px",position:"absolute",padding:"4px"}},
                        [
                            i("div",{staticClass:"myBar label-center"})
                        ],
                        1
                    ),
                    // t.tut&&0==t.tutdismiss1&&t.hint?
                    // i(
                    //     "v-card",
                    //     {staticStyle:{"z-index":"1",margin:"20px",top:"0px"},attrs:{dense:"","max-width":"192"}},
                    //     [
                    //         i(
                    //             "video",
                    //             {attrs:{playsinline:"",autoplay:"autoplay",loop:"loop",muted:""},domProps:{muted:!0}},
                    //             [i("source",{attrs:{type:"video/mp4",src:a("loadMP4Positon")}})]
                    //         ),
                    //         i("v-card-text",{staticStyle:{padding:"8px"}},[t._v("Position your development")]),
                    //         i(
                    //             "v-card-actions",
                    //             {staticStyle:{padding:"0px"}},
                    //             [
                    //                 i("v-btn",{attrs:{small:"",flat:""},on:{click:t.hintDisable}},[t._v("Hide Hints")]),
                    //                 i("v-spacer"),
                    //                 i("v-btn",{attrs:{small:"",color:"primary",flat:""},on:{click:function(e){t.tutdismiss1=!0}}},[t._v("Dismiss")])
                    //             ],
                    //             1
                    //         )
                    //     ],
                    //     1
                    // ):
                    // t._e(),                    
                    i(
                        "v-container",
                        {staticStyle:{left:"0",right:"0px",position:"absolute",padding:"4px",  "margin-top": "152px", "margin-left": "6px", "max-width": "220px", "max-height": "442px", "pointer-events": 'all', "overflow": "auto"},attrs:{"justify-center":"",fluid:""}},
                        [                            
                            
                            i(
                                "v-data-iterator",
                                {
                                    attrs:{
                                        items:t.newitems,
                                        "rows-per-page-items":t.rowsPerPageItems,
                                        pagination:t.pagination,
                                        "content-class":"layout",
                                        row:"",
                                        "hide-actions":"",
                                        id:"lay"
                                    },
                                    on:{"update:pagination":function(e){t.pagination=e}},
                                    scopedSlots:t._u([{
                                        key:"item",
                                        fn:function(e){
                                            return[
                                                i(
                                                    "v-flex",
                                                    {staticClass:"layitem tooltip",attrs:{shrink:""}},
                                                    [
                                                        // ""==t.lastpath&&t.hint?
                                                        // i(
                                                        //     "div",
                                                        //     {attrs:{id:"tooltip_select"}},
                                                        //     [
                                                        //         0==e.index?
                                                        //         i("div",{staticClass:"top tooltiptext",staticStyle:{position:"absolute",left:"inherit","margin-left":"90px","margin-top":"60px"}},[i("span",[t._v("Select a Layout")]),i("i")])
                                                        //         :t._e()
                                                        //     ]
                                                        // ):
                                                        t._e(),
                                                        i(
                                                            "v-card",
                                                            {staticClass:"lay_card tooltip",attrs:{"min-width":"142",light:"", width: "142"}},
                                                            [
                                                                i(
                                                                    "v-img",
                                                                    {
                                                                        staticClass:"App2-Lay-img",
                                                                        attrs:{src:t.publicPath+"assets/layouts/"+e.item.id+"/building-1.jpg","aspect-ratio":"1.5"},
                                                                        on:{click:function(a){return t.addmesh(e.item)}}
                                                                    }
                                                                ),
                                                                i("v-layout",{staticStyle:{position:"relative"}}),
                                                                // i("v-layout",{staticStyle:{position:"relative"}},[i("v-btn",{staticClass:"white--text",attrs:{color:"primary",id:"slotbtn",fab:"",small:"",depressed:"",right:"",top:"",absolute:"", display: "none"},on:{click:function(a){return t.editObj(e.item)}}},[i("v-icon",[t._v("edit")])],1)],1),
                                                                i("v-divider"),
                                                                i(
                                                                    "v-list",
                                                                    {attrs:{dense:""}},
                                                                    [
                                                                        i(
                                                                            "p",
                                                                            [
                                                                                i("v-list-tile-content",{staticStyle:{padding:"0 8px"}},[t._v(e.item.text1)]),
                                                                                i("v-list-tile-content",{staticStyle:{padding:"0 8px"}},[t._v(e.item.text2)])
                                                                                // ,i("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.item.units/2*3*t.elevation))])
                                                                            ],
                                                                            1
                                                                        )
                                                                    ],
                                                                    1
                                                                )
                                                            ],
                                                            1
                                                        )
                                                    ],
                                                    1
                                                )
                                            ]
                                        }
                                    }])
                                }
                            ),
                            i(
                                "div",
                                {staticClass:"text-xs-center"},
                                [
                                    i(
                                        "v-layout",
                                        {staticStyle:{flex:"auto","flex-wrap":"wrap-reverse","justify-content":"center"},attrs:{"pb-2":""}},
                                        [
                                            // i(
                                            //     "v-btn",
                                            //     {
                                            //         on:{click:function(e){return t.showfloor()}},
                                            //         model:{value:t.fill,callback:function(e){t.fill=e},expression:"fill"}
                                            //     },
                                            //     [
                                            //         t._v("\n          Fill  \n              "),
                                            //         i(
                                            //             "v-switch",
                                            //             {
                                            //                 staticStyle:{"margin-left":"8px",height:"25px","margin-top":"0px","padding-top":"0px"},
                                            //                 attrs:{color:"primary",readonly:""},
                                            //                 model:{value:t.fill,callback:function(e){t.fill=e},expression:"fill"}
                                            //             }
                                            //         )
                                            //     ],
                                            //     1
                                            // ),
                                            // i(
                                            //     "div",
                                            //     {staticClass:"text-xs-center"},
                                            //     [
                                            //         i("h4",{staticClass:"white--text"},[t._v("Number of pages")]),
                                            //         i(
                                            //             "v-pagination",
                                            //             {attrs:{length:1,"next-icon":"keyboard_arrow_right","prev-icon":"keyboard_arrow_left","total-visible":"4"},
                                            //             on:{input:function(e){return t.changeele()}},
                                            //             model:{value:t.elevation,callback:function(e){t.elevation=e},
                                            //             expression:"elevation"}}
                                            //         )
                                            //     ],
                                            //     1
                                            // ),
                                            // i(
                                            //     "v-btn",
                                            //     {
                                            //         // attrs:{small:""},
                                            //         on:{click:function(e){return t.step(3)}}
                                            //     },
                                            //     [i("v-icon",[t._v("cloud_upload")])]
                                            // ),
                                            i(
                                                "v-btn",
                                                {
                                                    staticClass:"white--text"
                                                    , staticStyle:{ "margin-top": "6px",  "margin-left": "102px",
                                                 display: "absolute"},  
                                                    attrs:{id:"LayoutBtn",color:"primary",disabled:t.step2btn},
                                                    on:{click:function(e){return t.step(3)}}
                                                },
                                                [t._v("Continue")]
                                            )
                                        ],
                                        1
                                    )
                                ],
                                1
                            )
                        ],
                        1
                    )
                ],
                1
            )
        },
        V=[],
        valuationLayout=(
            a("6c7b"),
            a("55dd"),
            {
                props:["newarea"],
                mounted:function(){
                    this.hint=app_hints,
                    this.fill=three_shape_vis;
                    var t=this;
                    fetch("/file_active_list").then(function(t){return t.json()}).then(function(e){ThreeCreateArea(),t.testareathree(e.results)}),
                    map.removeControl(draw),
                    map.on("mouseup",this.tutTest),
                    map.on("touchend",this.tutTest);
                    myldbar = new ldBar(".myBar", {
                        "stroke": '#1a88f0',
                        "stroke-width": 5,
                        "preset": "circle",
                        "value": 0
                      });
                    document.getElementsByClassName('myBar')[0].style.display = "none";
                },
                data:function(){
                    return{
                        publicPath:"/",
                        rowsPerPageItems:[2,4,12],
                        pagination:{rowsPerPage:6},
                        layoutitems:[],
                        newitems:[],
                        elevation:1,
                        lastpath:"",
                        tut:!1,
                        tutdismiss1:!1,
                        hint:!0,
                        fill:!1                        
                    }
                },
                beforeDestroy:function(){
                    map.off("mouseup",this.tutTest),
                    map.off("touchend",this.tutTest),
                    console.log("unbind")
                },
                methods:{
                    testareathree:function(t){
                        this.layoutitems=t;
                        var e = this.newarea, a = 0, i = 0, n = [];
                        this.newitems = n,
                        this.layoutitems.every(
                            function(t){
                                if(t.area<=e){
                                    var r=t.area;

                                    var geoValue = document.getElementsByClassName("mapboxgl-ctrl-geocoder--input");
                                    console.log("geovalue : "+ geoValue[0].value);
                                    var steppers = document.getElementsByClassName("v-stepper__label");
                                    steppers[0].innerHTML = geoValue[0].value;

                                    var selModelSpace = document.getElementsByClassName("select-model-space")[1];
                                    
                                    selModelSpace.style["margin-top"] = "0px";

                                    selModelSpace = document.getElementsByClassName("select-model-space")[2];

                                    selModelSpace.style["margin-top"] = "462px";

                                    console.log(a+" - "+r);


                                    6==draw_points?
                                    ThreeAreaTest(
                                        t.id,
                                        function(e){
                                            e>=0&&(
                                                t.rot=-1*e,
                                                n.push(t),
                                                i++,
                                                console.log(i+" - "+r+"||"+t.area),
                                                n.sort(
                                                    function(t,e){
                                                        return parseFloat(e.area)-parseFloat(t.area)
                                                    }
                                                )
                                            )
                                        }
                                    ):
                                    (t.rot=0,n.push(t)),
                                    a++
                                }
                                return!(12===a)
                            }
                        )
                    },
                    testarea:function(t){
                        this.layoutitems=t;
                        var e=this.newarea,a=0,i=[];
                        this.newitems=i,
                        this.layoutitems.every(
                            function(t){
                                return t.area<=e&&(t.length<=distance&&(t.rot=0,i.push(t)),a++),!(8===a)
                            }
                        )
                    },
                    addImgItem:function(){
                        if (buildingID) {
                            var imgItem = [buildingID, getDataUrl(imgTop),getDataUrl(imgView)];
                            // var imgItem = [buildingID, getDataUrl(imgTop)];

                            if (imgItems.length) {

                                for(var i=0;i<imgItems.length;i++){

                                    if (imgItems[i][0]==buildingID)
                                        break;
                                }

                                if (i==imgItems.length) imgItems.push(imgItem);

                            } else                             
                            imgItems.push(imgItem);
                        }
                    },
                    addmesh:function(t){
                        var e=t.id,a=t.rot,i=t.units/2*3;
                        this.addImgItem();                      
                        buildingID = t.id;                                              
                        imgTop = document.createElement('img'); 
                        imgTop.src = '/assets/layouts/'+t.id+'/top.png'; 
                        document.getElementById('body').appendChild(imgTop);
                        imgTop.style.display = "none";

                        imgView = document.createElement('img'); 
                        imgView.src = '/assets/layouts/'+t.id+'/view.jpg'; 
                        document.getElementById('body').appendChild(imgView);
                        imgView.style.display = "none";

                        
                        addObj(e,a,t.area);                        
                        form_units=i;
                        form_elevation=this.elevation;
                        this.lastpath=t;
                        0==tut_2?this.tut=!0:this.tut=!1;
                        
                    },
                    // changeele:function(){
                    //     ThreeElevation(this.elevation),
                    //     form_elevation=this.elevation
                    // },
                    showfloor:function(){
                        this.fill=!this.fill,
                        three_showfloor(this.fill)
                    },
                    tutTest:function(){
                        0==tut_2?this.tut=!0:this.tut=!1
                    },
                    hintDisable:function(){
                        this.hint=!1,app_hints=!1
                    },
                    step:function(t){
                        three_rot.visible = false;
                        this.addImgItem();
                        this.$emit("stepchanged",t);
                    }
                },
                computed:{
                    step2btn:function(){
                        
                        return""===this.lastpath
                    }
                }
            }
        ),
        $=(a("867f"),a("c377")),
        L=a("ce7e"),
        H=a("0e8f"),
        O=a("adda"),
        z=a("8860"),
        B=a("ba95"),
        D=a("5d23"),
        A=a("891e"),
        I=a("b73d"),
        LayoutObj = Object(m["a"])(valuationLayout,createLayoutHTML,V,!1,null,null,null),
        appLayout = LayoutObj.exports;
        v()(
            LayoutObj,
            {
                VBtn:f["a"],
                VCard:y["a"],
                VCardActions:b["a"],
                VCardText:b["b"],
                VContainer:x["a"],
                VDataIterator:$["a"],
                VDivider:L["a"],
                VFlex:H["a"],
                VIcon:C["a"],
                VImg:O["a"],
                VLayout:o["a"],
                VList:z["a"],
                VListTile:B["a"],
                VListTileContent:D["a"],
                VPagination:A["a"],
                VSpacer:E["a"],
                VSwitch:I["a"]
            }
        );
        var createMaterialHTML=function(){
            var t=this,e=t.$createElement,a=t._self._c||e;
            return t.gotoUsageStep(3.1)
        },
        G=[],
        N=(a("ac6a"),a("456d"),a("bfb9")),
        valuationMaterial={
            props:[],
            mounted:function(){
            },
            data:function(){
                return{
                    publicPath:"/",
                    map:null,
                    view:0,
                    cladding:0,
                    cladding2:0,
                    roofing:0,
                    window:0,
                    active:null,
                    layoutitems:N,
                    layoutkeys:[],
                    Height:"200px"
                }
            },
            beforeDestroy:function(){
                window.removeEventListener("resize",this.handleResize),
                console.log("Resize unbound")
                document.getElementsByClassName("select-model-space")[2].style["margin-top"]="0";
            },
            methods:{
                handleResize:function(t){
                    this.map.style.height=this.getheight()+"px",Three_Resize()
                },
                debug:function(){
                    if(this.layoutkeys=Object.keys(this.layoutitems),this.isMobile()) {
                        var t=document.getElementsByClassName("mapboxgl-ctrl-compass")[0];
                        this.map.appendChild(t),
                        t.style.cssText="position: absolute;height: 100vh; width: 100%; z-index: 1; opacity: 0;"
                    }
                },
                activelayout:function(t){
                    alert("activelayout");
                    return!1!==t[0].array
                },
                // Changevalue:function(t,e,a,i,n){
                //     "Exterior Finish"===t?
                //         (this.cladding=e,this.cladding2=a,form_cladding=e,form_cladding2=a,three_changemat(a,e,i,t)):
                //         "Roof Options"===t?
                //             (this.roofing=e,form_roofing=e,three_changemat(0,e,i,t)):
                //             "Window Elevations"===t&&(this.window=e,form_window=e,three_changemat(0,e,i,t))
                // },
                // ChangeView:function(t){this.view=t,ThreeChangeView(t)},
                // SetButton:function(t,e){
                //     if(1==t){
                //         if(e==this.roofing)return console.log(t+" "+e),!0
                //     } else if (2==t&&e==this.window)
                //         return!0
                // },
                gotoUsageStep:function(t){
                    CaptureStart(),this.$emit("stepchanged",t)
                },
                isMobile:function(){
                    return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                },
                getheight:function(){
                    if(1==this.isMobile()){
                        var t=window.innerHeight-151;
                        return console.log(t),t
                    }
                    t=window.innerHeight-151;
                    return t
                }
            },
            computed:{}
        },
        Z=(a("bfd1"),a("71a3")),
        J=a("c671"),
        X=a("fe57"),
        K=a("aac8"),
        MaterialObj = Object(m["a"])(valuationMaterial,createMaterialHTML,G,!1,null,null,null),
        appMaterial = MaterialObj.exports;
        v()(
            MaterialObj,{
                VBtn:f["a"],
                VCard:y["a"],
                VContainer:x["a"],
                VDataIterator:$["a"],
                VFlex:H["a"],
                VImg:O["a"],
                VLayout:o["a"],
                VTab:Z["a"],
                VTabItem:J["a"],
                VTabs:X["a"],
                VTabsItems:K["a"]
            }
        );
        var createPrintHTML=function(){      // -------------------- Ask Information for Print to PDF File ----------------------- //
            var t=this,e=t.$createElement,i=t._self._c||e;
            return i(
                "v-container",
                {staticClass:"step4",attrs:{"pa-0":"",fluid:""}},
                [
                    i(
                        "v-img",
                        {staticClass:"step4-bg",attrs:{src:CaptureData[1]}}//a("loadPrintBackground")
                    ),
                    i(
                        "v-container",
                        {attrs:{"pa-2":"","align-center":"","justify-center":"","fill-height":"","align-content-center":""}},
                        [
                            i(
                                "v-card",
                                {staticClass:"step4"},
                                [
                                    i(
                                        "v-container",
                                        {attrs:{"grid-list-md":""}},
                                        [
                                            i(
                                                "v-layout",
                                                {attrs:{wrap:""}},
                                                [
                                                    i(
                                                        "form",
                                                        [
                                                            i("v-img",{attrs:{contain:!0,src:a("pdfLogo")}}),
                                                            i(
                                                                "v-text-field",
                                                                {
                                                                    attrs:{"error-messages":t.firstnameErrors,label:"First Name*",required:""},
                                                                    on:{
                                                                        input:function(e){return t.$v.firstname.$touch()},
                                                                        blur:function(e){return t.$v.firstname.$touch()}
                                                                    },
                                                                    model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}
                                                                }
                                                            ),
                                                            i(
                                                                "v-text-field",
                                                                {
                                                                    attrs:{"error-messages":t.lastnameErrors,label:"Last Name*",required:""},
                                                                    on:{
                                                                        input:function(e){return t.$v.lastname.$touch()},
                                                                        blur:function(e){return t.$v.lastname.$touch()}
                                                                    },
                                                                    model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}
                                                                }
                                                            ),
                                                            i(
                                                                "v-text-field",
                                                                {
                                                                    attrs:{"error-messages":t.emailErrors,label:"E-mail*",required:""},
                                                                    on:{
                                                                        input:function(e){return t.$v.email.$touch()},
                                                                        blur:function(e){return t.$v.email.$touch()}
                                                                    },
                                                                    model:{value:t.email,callback:function(e){t.email=e},expression:"email"}
                                                                }
                                                            ),
                                                            i(
                                                                "v-text-field",
                                                                {
                                                                    attrs:{"error-messages":t.phoneErrors,label:"Phone Number*",required:""},
                                                                    on:{
                                                                        input:function(e){return t.$v.phone.$touch()},
                                                                        blur:function(e){return t.$v.phone.$touch()}
                                                                    },
                                                                    model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}
                                                                }
                                                            ),
                                                            i(
                                                                "v-text-field",
                                                                {
                                                                    attrs:{"error-messages":t.companyErrors,label:"Company Name",required:""},
                                                                    on:{
                                                                        input:function(e){return t.$v.company.$touch()},
                                                                        blur:function(e){return t.$v.company.$touch()}
                                                                    },
                                                                    model:{value:t.company,callback:function(e){t.company=e},expression:"company"}
                                                                }
                                                            ),
                                                           
                                                            i(
                                                                "small",
                                                                [t._v("*indicates required field")]
                                                            ),
                                                            i(
                                                                "v-btn",
                                                                {
                                                                    attrs:{color:"primary",disabled:0==t.Uploaded,loading:0==t.Uploaded},
                                                                    on:{click:t.submit}
                                                                },
                                                                [t._v("Download Feasibility")]
                                                            )
                                                        ],
                                                        1
                                                    )
                                                ]
                                            )
                                        ],
                                        1
                                    )
                                ],
                                1
                            )
                        ],
                        1
                    ),
                    i(
                        "v-dialog",
                        {attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},
                        [
                            i(
                                "v-card",
                                [
                                    i(
                                        "v-card-title",
                                        {staticClass:"headline"},
                                        [t._v("Your Feasibility is being generated")]
                                    ),
                                    i(
                                        "v-card-text",
                                        [t._v("Thank you, your Feasibility will arrive automatically in a few minutes. ")]
                                    ),
                                    i(
                                        "v-btn",
                                        {attrs:{color:"primary",flat:""},on:{click:function(e){return t.reload()}}},
                                        [t._v("Start New Development Again")]
                                    )
                                    // i(
                                    //     "v-btn",
                                    //     {attrs:{flat:""},on:{click:function(e){return t.download()}}},
                                    //     [t._v("Download Feasibility ")]
                                    // )
                                ],
                                1
                            )
                        ],
                        1
                    )
                ],
                1
            )
        },
        at=[],
        it=a("1dce"),
        nt=a("b5ae"),
        valuationPrint={
            mixins:[it["validationMixin"]],
            validations:{
                firstname:{required:nt["required"], maxLength:Object(nt["maxLength"])(20)},
                lastname:{required:nt["required"], maxLength:Object(nt["maxLength"])(20)},
                email:{required:nt["required"], email:nt["email"]},
                company:{maxLength:Object(nt["maxLength"])(100)},
                phone:{required:nt["required"], numeric:nt["numeric"], maxLength:Object(nt["maxLength"])(20)}
            },
            mounted:function(){
                if(Upload_Finished)
                    this.Uploaded=true
                else window.addEventListener("Uploaded",this.uploaded_event)
            },
            beforeDestroy:function(){
                window.removeEventListener("Uploaded",this.uploaded_event)
            },
            data:function(){
                return{
                    publicPath:"/",
                    firstname:"",
                    lastname:"",
                    email:"",
                    company:"",
                    phone:"",
                    dialog:!1,
                    Uploaded:!1
                }
            },
            computed:{
                firstnameErrors:function(){
                    var t=[];
                    return this.$v.firstname.$dirty?
                        (
                            !this.$v.firstname.maxLength&&t.push("Name must be at most 20 characters long"),
                            !this.$v.firstname.required&&t.push("First Name is required."),
                            t
                        ):
                        t
                },
                lastnameErrors:function(){
                    var t=[];
                    return this.$v.lastname.$dirty?
                        (
                            !this.$v.lastname.maxLength&&t.push("Name must be at most 20 characters long"),
                            !this.$v.lastname.required&&t.push("Last Name is required."),
                            t
                        ):
                        t
                },
                emailErrors:function(){
                    var t=[];
                    return this.$v.email.$dirty?
                        (
                            !this.$v.email.email&&t.push("Must be valid e-mail"),
                            !this.$v.email.required&&t.push("E-mail is required"),
                            t
                        ):
                        t
                },
                companyErrors:function(){
                    var t=[];
                    return this.$v.company.$dirty?
                        (
                            !this.$v.company.maxLength&&t.push("Name must be at most 100 characters long"),
                            t
                        ):
                        t
                },
                phoneErrors:function(){
                    var t=[];
                    return this.$v.phone.$dirty?
                        (
                            !this.$v.phone.maxLength&&t.push("Phone Number must be at most 20 characters long"),
                            !this.$v.phone.required&&t.push("Phone Number is required."),
                            !this.$v.phone.numeric&&t.push("Phone Number must only include numbers."),
                            t
                        ):
                        t
                }
            },
            methods:{

              

                submit:async function(){


                    PrintDoc += '<div style="font-family: inherit;">'
                    PrintDoc += '<h1 style="font-size:60px; margin-top:200px;color:#1a88f0;text-shadow:3px 2px #f5f8fa;">3D Model Building';
                    PrintDoc += '<br>';
                    PrintDoc += '<div style="font-family: Calibri; font-size:27px; width: 100%;"> Name:      ' + this.firstname + ' ' + this.lastname;
                    PrintDoc += '<br>';
                    PrintDoc += 'E-mail:      ' + this.email;
                    PrintDoc += '<br>';
                    PrintDoc += "Phone Number:  " + this.phone;
                    PrintDoc += '<br>';
                    PrintDoc += "Company Name:   " + this.company;
                    PrintDoc += '<br>';
                    PrintDoc += "Position URL:      </div>";
                    PrintDoc += "<h4 style='font-family: Calibri;' >http://google.com/maps/dir//"+ gLat +"," + gLng +"/@" + gLat +"," + gLng + ",350m/data=!3m1!1e3</h4>";
                    PrintDoc += "<p></p>";
                    PrintDoc += "<h1 style='page-break-before: always; margin-top:90px; font-family: Calibri; '>SITE LOCATION & PLAN</h1>";
                    PrintDoc +=  "<p style='margin-left:20px; font-family: Calibri; font-style: italic;'>Land Size: " + plan_area + "M²</p>";
                    PrintDoc += "<p></p>";
                    PrintDoc += "<h1 style='page-break-before: always; margin-top:90px; font-family: Calibri;'>ISOMETRIC VIEW</h1>";

                    for (var i=0;i<imgItems.length;i++) {
                        PrintDoc += "<h1 style='page-break-before: always; margin-top:90px; font-family: Calibri;'>GA PLAN</h1>";                    
                        PrintDoc += "<h1 style='page-break-before: always; margin-top:90px; font-family: Calibri;'>ELEVATIONS</h1>";
                        console.log(imgItems[i]);
                    }

                    PrintDoc += "</div>";

                    // PrintDoc =`http://google.com/maps/dir/${gLat},${gLng}/@${gLat},${gLng},350m/data=!3m1!1e3`;

                    var sendData = {
                        email: this.email,
                        company: this.company,
                        phone: this.phone,
                        name: this.firstname + " "+this.lastname                 
                    }

                    window.sendData = sendData;

                    var sendMail = `<div>
                    <p>Name: ${sendData.name}</p>
                    <p>E-mail: ${sendData.email}</p>
                    <p>Phone Number: ${sendData.phone}</p>
                    <p>Company Name: ${sendData.company}</p>
                    <p>Position URL: </p>
                    <h4 style='font-family: Calibri;' >http://google.com/maps/dir/${gLat},${gLng}/@${gLat},${gLng},350m/data=!3m1!1e3</h4>
                    </div>`

                    function b64toBlob(b64Data, contentType, sliceSize) {
                        contentType = contentType || '';
                        sliceSize = sliceSize || 512;
                
                        var byteCharacters = atob(b64Data);
                        var byteArrays = [];
                
                        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                            var slice = byteCharacters.slice(offset, offset + sliceSize);
                
                            var byteNumbers = new Array(slice.length);
                            for (var i = 0; i < slice.length; i++) {
                                byteNumbers[i] = slice.charCodeAt(i);
                            }
                
                            var byteArray = new Uint8Array(byteNumbers);
                
                            byteArrays.push(byteArray);
                        }
                
                        var blob = new Blob(byteArrays, {type: contentType});
                        return blob;
                    }


                    var formData = new FormData();
                    formData.append("sendData", sendMail)
                    formData.append('userEmail', sendData.email)

                    let pdf = await Submit()

                    var ImageURL = CaptureData[1]
                    // Split the base64 string in data and contentType
                    var block = ImageURL.split(";");
                    // Get the content type of the image
                    var contentType = block[0].split(":")[1];// In this case "image/gif"
                    // get the real base64 content of the file
                    var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

                    // Convert it to a blob to upload
                    var blob = b64toBlob(realData, contentType);
                    formData.append("file", blob)

                    var pdf_blob = pdf.output("blob")
                    formData.append("pdf", pdf_blob)


                    var xhr = new XMLHttpRequest();
                    xhr.open('post', '/print_pdf', true);
                    xhr.onload = function (e) {
                        if (this.status == 200) {
                            console.log("success")
                        }
                    };

                    xhr.send(formData);
                    this.$v.$touch();
                    this.dialog=!0;
                },
                clear:function(){this.$v.$reset(),this.name="",this.email=""},
                reload:function(){window.location.reload()},
                download:function(){pdf.save("feasibility.pdf")},
                uploaded_event:function(){
                    this.Uploaded=!0
                }
            }
        },
        st=(a("2763"),a("ac7c")),
        lt=a("2677"),
        PrintObj=Object(m["a"])(valuationPrint,createPrintHTML,at,!1,null,null,null),
        appPrint=PrintObj.exports;
        v()(
            PrintObj,
            {
                VBtn:f["a"],
                VCard:y["a"],
                VCardText:b["b"],
                VCardTitle:w["a"],
                VContainer:x["a"],
                VDialog:_["a"],
                VImg:O["a"],
                VLayout:o["a"],
                VTextField:lt["a"]
            }
        );
        var createUsageHTML=function(){
            var t=this,e=t.$createElement,i=t._self._c||e;
            return t.selectdev(1)
        },
        ut=[],
        valuationUsage={
            props:[],
            mounted:function(){},
            data:function(){return{publicPath:"/",development:-1}},
            methods:{
                selectdev:function(t){this.development=t,form_dev=t,this.gotoUnitStep(3.2)},
                gotoUnitStep:function(t){this.$emit("stepchanged",t)}
            },
            computed:{}
        },
        UsageObj=(a("1161"),Object(m["a"])(valuationUsage,createUsageHTML,ut,!1,null,null,null)),
        appUsage=UsageObj.exports;
        v()(
            UsageObj,
            {
                VCard:y["a"],
                VCardTitle:w["a"],
                VContainer:x["a"],
                VFlex:H["a"],
                VImg:O["a"],
                VLayout:o["a"]
            }
        );
        var createUnitHTML=function(){
            var t=this,
            e=t.$createElement,
            i=t._self._c||e;
            return t.gotoPrintStep(4)
        },
        yt=[],
        valuationUnit={
            props:[],
            mounted:function(){
            },
            data:function(){
                return{publicPath:"/",Sliders:[33,33,33],development:-1,units:50}
            },
            methods:{
                gotoPrintStep:function(t){
                    this.$emit("stepchanged",t);
                    Capture_GA();
                }
            },
            computed:{}
        },
        xt=a("ba0d"),
        UnitObj=Object(m["a"])(valuationUnit,createUnitHTML,yt,!1,null,null,null),
        appUnit=UnitObj.exports;
        v()(
            UnitObj,
            {
                VBtn:f["a"],
                VCard:y["a"],
                VContainer:x["a"],
                VFlex:H["a"],
                VImg:O["a"],
                VLayout:o["a"],
                VSlider:xt["a"]
            }
        );
        var Et,kt,St,Mt,Tt,jt,Vt,Rt,Pt,$t,Lt,Ht,Ot,mousebutton;
        a("673e"),a("7f7f");
        console.log("3d script mounted");
        var zt,Bt,Dt,At,It,Ft,qt,Wt,Gt,Nt,Ut,Yt,Zt,Jt,Xt,Kt,Qt,te,ee,ae,ie,ne,re,oe,se="#383e42",
        le="/assets/layouts/",
        ce="",
        de=0,pe=!1,ue=[],me=0,he=!1,ve=!1,fe=!1;
        window.devicePixelRatio;
        function ge(){
            map.off("mousedown",be),
            map.off("touchstart",be),
            map.off("mouseup",we),
            map.off("touchend",we),
            map.off("mousemove",xe),
            map.off("touchmove",xe)
        }
        function ye(){
            map.on("mousedown",be),
            map.on("touchstart",be),
            map.on("mouseup",we),
            map.on("touchend",we),
            map.on("mousemove",xe),
            map.on("touchmove",xe)
        }
        function be(t){  
            mousebutton=event.button;          
            if(!0===three_stage3)
                ge();
            else{
                var e=tb.queryRenderedFeatures(t.point)[0];
                if(e)
                    if("rot"===e.object.name)
                        map.dragPan.disable(),Zt=!0,Jt=t.point;
                    else if(-1==e.object.name.indexOf("shadow")){
                        map.dragPan.disable(),
                        three_rot.visible=false,
                        Nt=!0;
                        St=e.object.parent;
                        while(!(St.name=="Scene"&&St.type=="Scene")){
                            St=St.parent;
                        }
                        St=St.parent;
                        St.children.slice().forEach(
                            function(t){
                                if (t.name=="rot"&&t.type=="Mesh") {
                                    three_rot = t;
                                    three_rot.visible = true;
                                }
                            }
                        );
                        var a=t.lngLat.lng,
                        i=t.lngLat.lat,n=[a,i],
                        r=tb.projectToWorld(n);
                        Ut=St.position.x-r.x,
                        Yt=St.position.y-r.y;                        
                    } else three_rot&&(three_rot.visible=false);
                else three_rot&&(three_rot.visible=false)
            }
        }
        function we(){
            !0===three_stage3?
                ge():
            (Nt=!1,Zt=!1,map.dragPan.enable())
        }
        function decideObject(obj){
            return obj?
                "rot"===obj.object.name?
                    map.getCanvas().style.cursor="w-resize":
                    -1==obj.object.name.indexOf("shadow")?
                        map.getCanvas().style.cursor="move":
                    map.getCanvas().style.cursor="":
                map.getCanvas().style.cursor="",
                !0===Nt
        }
        function xe(t){            
            if(three_stage3)
                ge();
            else{
                var e=tb.queryRenderedFeatures(t.point);                
                if(decideObject(e[0])){
                    // ------------------------------ Object Pan -------------------------------------- //
                    
                    var a=t.lngLat.lng,
                    i=t.lngLat.lat,
                    n=[a,i],
                    r=tb.projectToWorld(n);
                    St.position.set(r.x+Ut,r.y+Yt,0),
                    St.__dirtyPosition=!0,
                    Dt=tb.unprojectFromWorld(St.position),
                    tb.repaint()
                }
                if(!0===Zt&&mousebutton==0){
                    // ------------------------------ Object Rotation --------------------------------- //
                    map.getCanvas().style.cursor="w-resize";
                    var o=t.point.x-Jt.x-(t.point.y-Jt.y);
                    o*=.005,
                    St.rotation.z+=o,
                    de=St.rotation.z,
                    Jt=t.point,
                    tut_2=!0,
                    tb.repaint()
                }
                if (!0===Zt&&mousebutton==1) {
                    // ------------------------------ Object Zoom ------------------------------------- //
                    map.getCanvas().style.cursor="w-resize";
                    var o=t.point.x-Jt.x-(t.point.y-Jt.y);                    
                    o*=.0001;                    
                    var scalValue=St.scale.x+o;
                    St.scale.set(scalValue, scalValue, scalValue),                    
                    tb.repaint()
                }
            }
        }
        function _e(t,e,a){
            Tt.load(
                t,
                function(t){
                    t.flipY=!1,
                    t.wrapS=1e3,
                    t.wrapT=1e3,
                    0===e?
                        (a.map=t,a.roughnessMap=t):
                    1===e?
                        a.normalMap=t:
                    a.metalnessMap=t,
                    tb.repaint(),
                    Se()
                }
            )
        }
        function Ce(){
            if(void 0===Xt){
                Kt=new THREE.Scene;
                var t=window.innerWidth,
                e=window.innerHeight;
                Qt=new THREE.OrthographicCamera(t/-600,t/600,e/600,e/-600,1,1e3);
                te=new THREE.OrthographicCamera(t/-600,t/600,e/600,e/-600,1,1e3);
                ee=new THREE.OrthographicCamera(t/-600,t/600,e/600,e/-600,1,1e3);
                ae=new THREE.OrthographicCamera(t/-600,t/600,e/600,e/-600,1,1e3);
                ie=new THREE.OrthographicCamera(t/-600,t/600,e/600,e/-600,1,1e3);
                ne=Qt;
                Xt=new THREE.WebGLRenderer;
                Xt.setClearColor(16777215,1);
                Xt.setSize(window.innerWidth,window.innerHeight);
                var a=new THREE.AmbientLight(4210752,3);
                Kt.add(a),
                Qt.position.z=200,
                te.position.z=-200,
                ee.position.x=200,
                ae.position.x=-200,
                ie.position.y=200,
                Qt.lookAt(Kt.position),
                te.lookAt(Kt.position),
                ae.lookAt(Kt.position),
                ee.lookAt(Kt.position),
                ie.lookAt(Kt.position),
                Se()
            }
            Kt.add(kt)
        }
        function Ee(){
            Se();
            for(var t=Et.position.clone(),e=0;e<Et.geometry.vertices.length;e++) {
                var a=Et.geometry.vertices[e].clone(),
                i=a.applyMatrix4(Et.matrix),
                n=i.sub(Et.position),
                r=new THREE.Raycaster(t,n.clone().normalize()),
                o=r.intersectObject(kt);
                if(o.length>0&&o[0].distance<n.length())
                    return!1
            }
        }
        function ke(){
            if(!1!==Ee())
                return 0;
            for(i=0;i<36;i++){
                if(Et.rotation.y-=.082,Et.updateMatrix(),!1!==Ee())
                    return .082*i;
                if(35===i) return -1
            }
        }
        function Se(){
            var t=800,e=400;
            if(!1===ve){
                var a=window.innerHeight-151;
                ne.left=window.innerWidth/-2;
                ne.right=window.innerWidth/2;
                ne.top=a/2;
                ne.bottom=a/-2;
                re&&(
                    5!==me?
                        (ne.zoom=.9*Math.min(window.innerWidth/(re.max.x-re.min.x),a/(re.max.y-re.min.y)),ne.updateProjectionMatrix()):
                        (ne.zoom=.9*Math.min(window.innerWidth/(re.max.x-re.min.x),a/(re.max.z-re.min.z)),ne.updateProjectionMatrix())
                );
                Xt.setSize(window.innerWidth,a);
                Xt.render(Kt,ne)
            // } else if(2==CaptureData.length) {
            //     Xt.setSize(t,e);
            //     ne=Qt;
            //     ne.position.y=.5;
            //     ne.left=t/-2;
            //     ne.right=t/2;
            //     ne.top=e/2;
            //     ne.bottom=e/-2;
            //     ne.zoom=.75*Math.min(t/(re.max.x-re.min.x),e/(re.max.y-re.min.y));
            //     ne.updateProjectionMatrix();
            //     Xt.render(Kt,ne);
            //     CaptureData.push(Xt.domElement.toDataURL("image/jpeg",.92));
            //     Se();
            // } else if(3==CaptureData.length) {
            //     ne=ee;
            //     ne.position.y=.5;
            //     ne.left=t/-2;
            //     ne.right=t/2;
            //     ne.top=e/2;
            //     ne.bottom=e/-2;
            //     ne.zoom=.75*Math.min(t/(re.max.x-re.min.x),e/(re.max.y-re.min.y));
            //     ne.updateProjectionMatrix();
            //     Xt.render(Kt,ne);
            //     CaptureData.push(Xt.domElement.toDataURL("image/jpeg",.92));
            //     Se();
            // } else if(4==CaptureData.length) {
            //     ne=te;
            //     ne.position.y=.5;
            //     ne.left=t/-2;
            //     ne.right=t/2;
            //     ne.top=e/2;
            //     ne.bottom=e/-2;
            //     ne.zoom=.75*Math.min(t/(re.max.x-re.min.x),e/(re.max.y-re.min.y));
            //     ne.updateProjectionMatrix();
            //     Xt.render(Kt,ne);
            //     CaptureData.push(Xt.domElement.toDataURL("image/jpeg",.92));
            //     Se();
            // } else if(5==CaptureData.length) {
            //     ne=ae;
            //     ne.position.y=.5;
            //     ne.left=t/-2;
            //     ne.right=t/2;
            //     ne.top=e/2;
            //     ne.bottom=e/-2;
            //     ne.zoom=.75*Math.min(t/(re.max.x-re.min.x),e/(re.max.y-re.min.y));
            //     ne.updateProjectionMatrix();
            //     Xt.render(Kt,ne);
            //     CaptureData.push(Xt.domElement.toDataURL("image/jpeg",.92));
            //     Se();
            } else if(1==fe){
                // t=1920;
                // e=1080;
                // Xt.setSize(t,e);
                // ne=ie,ne.left=t/-2;
                // ne.right=t/2;
                // ne.top=e/2;
                // ne.bottom=e/-2;
                // re = (new THREE.Box3).setFromObject(Ft.clone());
                // ne.zoom=.9*Math.min(t/(re.max.x-re.min.x),e/(re.max.z-re.min.z));
                // ne.updateProjectionMatrix();
                // Xt.render(Kt,ne);
                // ve=!1;
                // CaptureData.push(Xt.domElement.toDataURL("image/jpeg",.5));
                Ve();
                var i=document.getElementById("map");
                i.parentNode.removeChild(i)
            }
        }
        function Me(t){
            Tt.load(
                t,
                function(t){
                    t.flipY=!1,
                    t.wrapS=1e3,
                    t.wrapT=1e3,
                    Lt.alphaMap=t,
                    tb.repaint()
                },
                void 0,
                function(t){}
            )
        }
        function Te(){
            setTimeout(
                function(){
                    map.loaded()?(he=!0,tb.repaint()):Te()
                },
                50
                )
        }
        window.threeboxstart=function(){
            Dt=origin,
            map.addLayer({
                id:"custom_layer",
                type:"custom",
                renderingMode:"3d",
                onAdd:function(t,e){
                    window.tb=new Threebox(t,e,{defaultLights:!1}),
                    tb.renderer.gammaOutput=!0,tb.renderer.gammaFactor=1.1;
                    var a="/js/threejs/skybox/",
                    i=".jpg",
                    n=[a+"px"+i,a+"nx"+i,a+"nz"+i,a+"pz"+i,a+"py"+i,a+"ny"+i];
                    Mt=(new THREE.CubeTextureLoader).load(n),
                    Mt.format=THREE.RGBFormat;
                    var r=new THREE.GLTFLoader;
                    r.load(
                        "/js/threejs/floorplan_stairs.glb",
                        function(t){
                            var e=t.scene;
                            e.traverse(function(t){t.isMesh&&(It=t.geometry)})
                        }
                    )
                },
                render:function(t,e){
                    if(tb.update(),1==he) {
                        if(CaptureData.push(map.getCanvas().toDataURL("image/jpeg",.5)),he=!1,1==CaptureData.length){
                            var a=map.cameraForBounds(map_bbox,{padding:{top:15,bottom:15,left:15,right:15}});
                            map.setPitch(60);
                            var i=St.rotation.z*(-180/Math.PI);
                            i+=45,
                            i+=360*Math.ceil(-i/360),
                            map.setBearing(i),
                            map.setZoom(a.zoom),
                            Te()
                        }
                        else 2==CaptureData.length&&(ve=!0,Se())
                    }
                }
            })
        },
        window.three_showfloor=function(t){
            three_shape_vis=t,
            void 0!=At&&void 0!=St&&(At.visible=three_shape_vis,tb.repaint())
        },
        window.addObj=function(t,a,i){
            var n;
            // void 0!=St&&(
            //     St.children.slice().forEach(
            //         function(t){
            //             return St.remove(t)
            //         }
            //     ),
            //     tb.scene.remove(St)
            // ),
            three_rot&&(three_rot.visible=false);
            void 0!=At&&(At.visible=three_shape_vis),
            1==pe&&(Dt=origin,pe=!1),
            n=new THREE.Group,
            St=n,
            0!=a&&t!=ce?(St.rotation.z=a,de=a):St.rotation.z=de,ce=t;
            var r=tb.projectToWorld(Dt);
            n.position.set(0 , 0 , 0),
            tb.add(n);
            if(!window.lightNum){
                var light1=new THREE.DirectionalLight(16777215);
                var light2=new THREE.DirectionalLight(16777215);
                light1.position.set(1500, 800, -2000),
                light1.matrixWorldNeedsUpdate=true,
                n.add(light1);
                light2.position.set(-500, -500, 1e3),
                light2.matrixWorldNeedsUpdate=true,
                n.add(light2)
                light1.intensity = 30
                light2.intensity = 30
                window.light1 = light1
                window.light2 = light2
                window.map_paint = tb
                window.lightNum = 2
            }
            var s=Math.sqrt(i/3.142);
            s=s/20+.25,
            console.log(s+" || "+i);
            var geo=new THREE.TorusBufferGeometry(s , .01, 16, 60),
            mat=new THREE.MeshBasicMaterial({color:1738992}),
            m=new THREE.Mesh(geo, mat);            
            m.name="rot";            
            three_rot=m,
            three_rot.visible=false;
            n.add(m);
            var h=new THREE.GLTFLoader;
            if(!window.selectedModel)
                window.selectedModel = t;
                
            h.load(
                le+t+"/1.glb",
                // called when the resource is loaded
                function(a){
                    var i=a.scene;
                    n.add(i);
                    i.scale.set(.0448,.0448,.0448);
                    i.rotation.x=1.5708;
                    Ft=i;
                    tb.repaint();       
                },
                // called while loading is progressing
                function ( xhr ) {

                    var ldValue = parseInt(xhr.loaded / xhr.total * 100);
                    var ss = document.getElementsByClassName('myBar');
                    console.log( ( ldValue ) + '% loaded' );
                    if ( xhr.loaded == xhr.total) {
                        map.getCanvas().style.cursor  = "";
                        myldbar.set(100, true);                        
                        ss[0].style.display = "none";
                    } else {
                        map.getCanvas().style.cursor = "wait";
                        ss[0].style.display = "";
                        myldbar.set(ldValue, true);
                    }

                },
                // called when loading has errors
                function ( error ) {
                    console.log( 'An error happened' );
                }
            ),
            // n.position.set(r.x+.2,r.y+.2,0),
            n.position.set(r.x-.5, r.y-.5 ,0),
            tb.repaint()
        },
        window.ThreeReset=function(){
            pe=!0,
            void 0!=St&&(
                St.children.slice().forEach(
                    function(t){return St.remove(t)}
                ),
                tb.remove(At),
                tb.scene.remove(St),
                St=void 0,
                console.log("destroyed"),
                tb.repaint()
            )
        },
        window.three_changemat=function(t,e,a,i){
            "undefined"===typeof a&&(a=16777215),
            "Exterior Finish"===i?
                (
                    Rt.color=new THREE.Color(a),
                    _e(0==t?"/js/threejs/texture/Cladding/cladding_"+t+"_0.jpg":"threejs/texture/Cladding/cladding_"+t+"_"+e+".jpg",0,Rt),
                    _e(3==t&&e>1?"/js/threejs/texture/Cladding/cladding_"+t+"_1_nrm.png":"threejs/texture/Cladding/cladding_"+t+"_nrm.png",1,Rt),
                    se=0==t?
                        a:
                        "#383e42",
                        1!=form_roofing&&(
                            Pt.color=new THREE.Color(se),
                            console.log(form_roofing)
                        )
                ):
                "Roof Options"===i?
                    (
                        1==e?
                            (Pt.roughness=.75,Pt.lightMapIntensity=1,Pt.color.setHex(16777215)):
                            (Pt.roughness=.5,Pt.lightMapIntensity=1.5,Pt.color=new THREE.Color(se)),
                        _e("/js/threejs/texture/roof/roof_"+e+".jpg",0,Pt),
                        _e("/js/threejs/texture/roof/roof_"+e+"_nrm.png",1,Pt)
                    ):
                    "Window Elevations"===i&&(
                        _e("/js/threejs/texture/window/window_"+e+".jpg",0,jt),
                        1==e?
                            (_e("/js/threejs/texture/window/window_mtl2.png",2,jt),console.log("glazed")):
                            _e("/js/threejs/texture/window/window_mtl.png",2,jt)
                    ),
            Se()
        },
        window.ThreeCreateArea=function(){

            ye(),
            void 0!=kt&&(Kt.remove(kt),tb.remove(At),console.log("destroyed BaseArea"),Dt=origin);
            var t=new THREE.MeshLambertMaterial({color:16720469,side:THREE.BackSide}),
            e=tb.projectToWorld(origin),
            a=turf.explode(mask).features,
            n={depth:2,bevelEnabled:!1},
            r=new THREE.Shape,
            o=tb.projectToWorld(a[0].geometry.coordinates);
            for(r.moveTo(e.x-o.x,e.y-o.y),i=1;i<a.length;i++){
                var s=tb.projectToWorld(a[i].geometry.coordinates);
                r.lineTo(e.x-s.x,e.y-s.y)
            }
            r.lineTo(e.x-o.x,e.y-o.y);
            var l=new THREE.ExtrudeBufferGeometry(r,n),
            c=(new THREE.Geometry).fromBufferGeometry(l),
            d=new THREE.Mesh(c,t);
            d.rotation.z=3.1416,
            kt=d.clone(),
            kt.position.set(0,0,0),
            kt.position.set(0,0,-1);
            Ce();
            var p=new THREE.ShapeGeometry(r);
            At=new THREE.Mesh(p,Ht),
            At.name="shadow",
            At.rotation.z=3.1416,
            At.scale.set(1.0, 1.0, 1.0),
            At.position.set(e.x,e.y,-.01),
            At.visible=!1,
            tb.add(At),
            tb.repaint()

        },
        window.ThreeAreaTest=function(t,e){
            var a=new THREE.GLTFLoader;
            a.load(
                le+t+"/box.glb",
                function(t){
                    var a,i=t.scene;
                    i.traverse(
                        function(t){
                            if(t.isMesh){
                                t.scale.set(.399662067997037,.399662067997037,.399662067997037),
                                t.rotation.x=1.5708;
                                var e=new THREE.MeshLambertMaterial({color:16720469});
                                t.material=e;
                                var a=(new THREE.Geometry).fromBufferGeometry(t.geometry);
                                t.geometry=a,
                                Et=t
                            }
                        }
                    ),
                    Se(),
                    Kt.add(Et),
                    a=ke(),
                    Kt.remove(Et),
                    e(a)
                }
            )
        },
        window.Three_Resize=function(){
            var t=window.innerHeight-151;
            ne.left=window.innerWidth/-2,
            ne.right=window.innerWidth/2,
            ne.top=t/2,
            ne.bottom=t/-2,
            5!==me?
                (
                    ne.zoom=.9*Math.min(window.innerWidth/(re.max.x-re.min.x),t/(re.max.y-re.min.y)),
                    ne.updateProjectionMatrix()
                ):
                (
                    ne.zoom=.9*Math.min(window.innerWidth/(re.max.x-re.min.x),t/(re.max.z-re.min.z)),
                    ne.updateProjectionMatrix()
                ),
            Xt.setSize(window.innerWidth,t),
            Xt.render(Kt,ne)
        },
        
        // window.ThreeElevation=function(t){
        //     if(""!==ce){
        //         var e;
        //         for(t-=2,Me(le+ce+"/shadow"+t+".jpg"),e=0;e<ue.length;e++)
        //             Ft.remove(ue[e]);
        //         for(e=0;e<t;e++){
        //             var a=qt.clone();
        //             a.traverse(
        //                 function(t){
        //                     var e=t.name.indexOf("step");
        //                     -1!=e&&(t.geometry=Gt,t.material=Vt)
        //                 }
        //             ),
        //             a.position.y=.28775668895786666*(e+1),
        //             a.updateMatrix(),
        //             Ft.add(a),
        //             ue.push(a)
        //         }
        //         qt.visible=-1!=t,
        //         Wt.position.y=.28775668895786666*t,
        //         tb.repaint()
        //     }
        // },
        window.CaptureStart=function(){
            var t=document.getElementById("map"),
            e=1920,
            a=1080;
            window.devicePixelRatio=1,
            t.style.width=e+"px",
            t.style.height=a+"px",
            map.resize(),
            map.setPitch(0),
            map.setBearing(0),
            map.fitBounds(map_bbox,{padding:{top:30,bottom:30,left:30,right:30},maxZoom:18,duration:0}),
            Te()
        },
        window.Capture_GA=function(){
            fe=!0;
            Se();
        };
        var je=new FormData;
        // new FormData;
        function Ve(){
            Upload_Finished=true,
            window.dispatchEvent(event_upload),
            console.log("Finish Upload1")
        }
        var Re={
            name:"App",
            //  Component
            //      AppStep1: Readline
            //      AppStep2: Layout
            //      AppStep3: Material
            //      AppStep4: Print
            //      AppStep6: Usage
            //      AppStep7: Unit
            components:{AppStep1:appReadline, AppStep2:appLayout, AppStep3:appMaterial, AppStep4:appPrint, AppStep6:appUsage, AppStep7:appUnit},
            mounted:function(){this.start()},
            data:function(){return{drawer:null,step:0,step3:!1,areavalue:0}},
            methods:{
                start:function(){
                    map.on("zoom",this.debug);
                    var t=document.getElementById("geocoder"),
                    e=this.$refs.geotemp;
                    e.appendChild(t)
                },
                debug:function(){
                    var t=document.getElementById("geocoder"),
                    e=document.getElementsByClassName("mapboxgl-ctrl-top-left");

                    e[0].appendChild(t),
                    map.off("zoom",this.debug),
                    this.isMobile()&&document.body.requestFullscreen();
                    var a=document.getElementById("map");
                    a.style.filter="none";
                    this.step=1;
                },
                reload:function(){window.location.reload()},
                backstep:function(){
                    var t=this.step-1;
                    if(0==t)
                        this.reload();
                    else if(1==t){
                        var e;
                        this.step=t,
                        e=document.getElementById("geocoder"),
                        e.style.visibility="visible",
                        ThreeReset(),
                        mask=turf.polygon([[[0,0],[0,0],[0,0],[0,0]]],{name:"poly1"}),
                        createMask()
                    } else 2==t?
                        (
                            this.step=t,
                            this.map=document.getElementById("map"),
                            this.map.style.height="100%",
                            map.resize(),
                            map.dragPan.enable(),
                            mapboxleftrot="right",
                            map.scrollZoom._aroundCenter=!1,
                            map.touchZoomRotate._aroundCenter=!1,
                            three_stage3=!1
                        ):
                        3.2==this.step?
                            this.step=3.1:
                            4==this.step&&(this.step=3.2)
                },
                isMobile:function(){
                    return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }
            },
            computed:{}
        },
        Pe=Re,
        $e=(a("034f"),a("7496")),
        Le=a("7e85"),
        He=a("9c54"),
        Oe=a("56a4"),
        ze=Object(m["a"])(Pe,s,l,!1,null,null,null),
        Be=ze.exports;
        v()(
            ze,
            {
                VApp:$e["a"],
                VBtn:f["a"],
                VContainer:x["a"],
                VDivider:L["a"],
                VFlex:H["a"],
                VIcon:C["a"],
                VImg:O["a"],
                VLayout:o["a"],
                VStepper:Le["a"],
                VStepperHeader:He["a"],
                VStepperStep:Oe["a"],
                VToolbar:k["a"]
            }
        ),
        n["a"].config.productionTip=!1,
        new n["a"]({render:function(t){return t(Be)}}).$mount("#app")
    },
    "5ac0":function(t,e,a){
        t.exports=a.p+"/img/type_1.62041bb2.jpg"
    },
    "5e70":function(t,e,a){},
    "867f":function(t,e,a){
        "use strict";
        var i=a("e24f"),n=a.n(i);
        n.a
    },
    "964e":function(t,e,a){},
    b003:function(t,e,a){
        t.exports=a.p+"/img/step_type_1.727550b5.png"
    },
    loadMP4Plot:function(t,e,a){
        t.exports=a.p+"media/plot.mp4"
    },
    bfb9:function(t){
        t.exports={
            "Exterior Finish":[
                {
                    name:"Paint",
                    price:0,
                    id:"0",
                    array:[
                        {name:"Anthracite",price:50,id:"0",colour:"#383e42"},
                        {name:"Jet Black",price:50,id:"1",colour:"#0e0e10"},
                        {name:"Traffic White",price:50,id:"2",colour:"#f1f0ea"},
                        {name:"Signal Grey",price:50,id:"3",colour:"#9b9b9b"},
                        {name:"Moss Green",price:50,id:"4",colour:"#114232"},
                        {name:"Pigeon Blue",price:50,id:"5",colour:"#637d96"},
                        {name:"Green Blue",price:50,id:"6",colour:"#0f4c64"}
                    ]
                },
                {
                    name:"Timber",
                    price:0,
                    id:"1",
                    array:[
                        {name:"Pebble Grey",price:50,id:"0"},
                        {name:"Red cedar",price:50,id:"1"},
                        {name:"Larch",price:50,id:"2"},
                        {name:"Mahogany",price:50,id:"3"},
                        {name:"IPE",price:50,id:"4"},
                        {name:"Weathered",price:50,id:"5"}
                    ]
                },
                {
                    name:"Brick",
                    price:0,
                    id:"2",
                    array:[
                        {name:"Camden",price:50,id:"0"},
                        {name:"Pastorale",price:50,id:"1"},
                        {name:"Ketley Blue",price:50,id:"2"},
                        {name:"Heritage",price:50,id:"3"},
                        {name:"Rustic",price:50,id:"4"},
                        {name:"Grey",price:50,id:"5"}
                    ]
                },
                {
                    name:"Panelised",
                    price:0,
                    id:"3",
                    array:[
                        {name:"Mix of Blue",price:50,id:"0"},
                        {name:"Mix of Grey",price:0,id:"1"},
                        {name:"Metal Effect",price:50,id:"2"},
                        {name:"Stone Effect",price:50,id:"3"},
                        {name:"Dark Panel",price:50,id:"4"},
                        {name:"White Panel",price:50,id:"5"}
                    ]
                }
            ],
            "Roof Options":[
                {name:"none",price:0,id:"0",array:!1},
                {name:"Grass",price:50,id:"1"},
                {name:"Solar",price:50,id:"2"}
            ],
            "Window Elevations":[
                {name:"Anthracite",price:0,id:"0",array:!1},
                {name:"Tinted Glazed",price:50,id:"1"},
                {name:"Green",price:50,id:"2"},
                {name:"Pastel blue",price:50,id:"3"},
                {name:"Blue",price:50,id:"4"},
                {name:"Turquoise",price:50,id:"5"},
                {name:"Lilac",price:50,id:"6"},
                {name:"Purple",price:50,id:"7"},
                {name:"Ruby red ",price:50,id:"8"},
                {name:"Signal yellow",price:50,id:"9"}
            ]
        }
    },
    bfd1:function(t,e,a){
        "use strict";
        var i=a("d33e"),n=a.n(i);
        n.a
    },
    d33e:function(t,e,a){},
    d626:function(t,e,a){
        "use strict";
        var i=a("964e"),n=a.n(i);
        n.a
    },
    e023:function(t,e,a){
        t.exports=a.p+"/img/step_type_2.8a3a3c0f.png"
    },
    e24f:function(t,e,a){},
    loadPrintBackground:function(t,e,a){
        t.exports=a.p+"/img/PrintBackground.jpg"
    },
    loadMP4Positon:function(t,e,a){
        t.exports=a.p+"media/position.mp4"
    }
});
