import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    vw.MapOptions = {
        container : "vmap",
        mapMode : "2d-map",
        basemapType : vw.ol3.BasemapType.GRAPHIC,
        controlDensity : vw.ol3.DensityType.EMPTY,
        interactionDensity : vw.ol3.DensityType.BASIC,
        controlsAutoArrange : true,
        homePosition : vw.ol3.CameraPosition,
        initPosition : vw.ol3.CameraPosition,
       };
        
       mapController = new vw.MapController(vw.MapOptions);
     
   `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div id="vmap" style={{width:'100%', height:'170px', left:'0px', top:'0px'}}></div>
    </>
  );
};

export default Map;


//오늘 초안 완료
//토요일 세부디자인 완료
//일요일 시험끝난후 