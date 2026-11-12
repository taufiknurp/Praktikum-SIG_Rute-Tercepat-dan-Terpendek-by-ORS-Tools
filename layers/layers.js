ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12464604.780143, -856629.977885, 12495732.027706, -837804.053510]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189 &gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Shortest_StasiunKertosonotoPasarSambikenceng_2 = new ol.format.GeoJSON();
var features_Shortest_StasiunKertosonotoPasarSambikenceng_2 = format_Shortest_StasiunKertosonotoPasarSambikenceng_2.readFeatures(json_Shortest_StasiunKertosonotoPasarSambikenceng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_StasiunKertosonotoPasarSambikenceng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_StasiunKertosonotoPasarSambikenceng_2.addFeatures(features_Shortest_StasiunKertosonotoPasarSambikenceng_2);
var lyr_Shortest_StasiunKertosonotoPasarSambikenceng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_StasiunKertosonotoPasarSambikenceng_2, 
                style: style_Shortest_StasiunKertosonotoPasarSambikenceng_2,
                popuplayertitle: 'Shortest_Stasiun Kertosono to Pasar Sambikenceng',
                interactive: true,
                title: '<img src="styles/legend/Shortest_StasiunKertosonotoPasarSambikenceng_2.png" /> Shortest_Stasiun Kertosono to Pasar Sambikenceng'
            });
var format_Shortest_StasiunKertosonotoRSUDKertosono_3 = new ol.format.GeoJSON();
var features_Shortest_StasiunKertosonotoRSUDKertosono_3 = format_Shortest_StasiunKertosonotoRSUDKertosono_3.readFeatures(json_Shortest_StasiunKertosonotoRSUDKertosono_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_StasiunKertosonotoRSUDKertosono_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_StasiunKertosonotoRSUDKertosono_3.addFeatures(features_Shortest_StasiunKertosonotoRSUDKertosono_3);
var lyr_Shortest_StasiunKertosonotoRSUDKertosono_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_StasiunKertosonotoRSUDKertosono_3, 
                style: style_Shortest_StasiunKertosonotoRSUDKertosono_3,
                popuplayertitle: 'Shortest_Stasiun Kertosono to RSUD Kertosono',
                interactive: true,
                title: '<img src="styles/legend/Shortest_StasiunKertosonotoRSUDKertosono_3.png" /> Shortest_Stasiun Kertosono to RSUD Kertosono'
            });
var format_Shortest_StasiunKertosonotoPasarRakyatLengkong_4 = new ol.format.GeoJSON();
var features_Shortest_StasiunKertosonotoPasarRakyatLengkong_4 = format_Shortest_StasiunKertosonotoPasarRakyatLengkong_4.readFeatures(json_Shortest_StasiunKertosonotoPasarRakyatLengkong_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_StasiunKertosonotoPasarRakyatLengkong_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_StasiunKertosonotoPasarRakyatLengkong_4.addFeatures(features_Shortest_StasiunKertosonotoPasarRakyatLengkong_4);
var lyr_Shortest_StasiunKertosonotoPasarRakyatLengkong_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_StasiunKertosonotoPasarRakyatLengkong_4, 
                style: style_Shortest_StasiunKertosonotoPasarRakyatLengkong_4,
                popuplayertitle: 'Shortest_Stasiun Kertosono to Pasar Rakyat Lengkong',
                interactive: true,
                title: '<img src="styles/legend/Shortest_StasiunKertosonotoPasarRakyatLengkong_4.png" /> Shortest_Stasiun Kertosono to Pasar Rakyat Lengkong'
            });
var format_Shortest_StasiunKertosonotoPasarKertosono_5 = new ol.format.GeoJSON();
var features_Shortest_StasiunKertosonotoPasarKertosono_5 = format_Shortest_StasiunKertosonotoPasarKertosono_5.readFeatures(json_Shortest_StasiunKertosonotoPasarKertosono_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_StasiunKertosonotoPasarKertosono_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_StasiunKertosonotoPasarKertosono_5.addFeatures(features_Shortest_StasiunKertosonotoPasarKertosono_5);
var lyr_Shortest_StasiunKertosonotoPasarKertosono_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_StasiunKertosonotoPasarKertosono_5, 
                style: style_Shortest_StasiunKertosonotoPasarKertosono_5,
                popuplayertitle: 'Shortest_Stasiun Kertosono to Pasar Kertosono',
                interactive: true,
                title: '<img src="styles/legend/Shortest_StasiunKertosonotoPasarKertosono_5.png" /> Shortest_Stasiun Kertosono to Pasar Kertosono'
            });
var format_Shortest_StasiunKertosonotoPasarKedungringin_6 = new ol.format.GeoJSON();
var features_Shortest_StasiunKertosonotoPasarKedungringin_6 = format_Shortest_StasiunKertosonotoPasarKedungringin_6.readFeatures(json_Shortest_StasiunKertosonotoPasarKedungringin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_StasiunKertosonotoPasarKedungringin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_StasiunKertosonotoPasarKedungringin_6.addFeatures(features_Shortest_StasiunKertosonotoPasarKedungringin_6);
var lyr_Shortest_StasiunKertosonotoPasarKedungringin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_StasiunKertosonotoPasarKedungringin_6, 
                style: style_Shortest_StasiunKertosonotoPasarKedungringin_6,
                popuplayertitle: 'Shortest_Stasiun Kertosono to Pasar Kedungringin',
                interactive: true,
                title: '<img src="styles/legend/Shortest_StasiunKertosonotoPasarKedungringin_6.png" /> Shortest_Stasiun Kertosono to Pasar Kedungringin'
            });
var format_Shortest_StasiunKertosonotoPabrikGulaLestari_7 = new ol.format.GeoJSON();
var features_Shortest_StasiunKertosonotoPabrikGulaLestari_7 = format_Shortest_StasiunKertosonotoPabrikGulaLestari_7.readFeatures(json_Shortest_StasiunKertosonotoPabrikGulaLestari_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_StasiunKertosonotoPabrikGulaLestari_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_StasiunKertosonotoPabrikGulaLestari_7.addFeatures(features_Shortest_StasiunKertosonotoPabrikGulaLestari_7);
var lyr_Shortest_StasiunKertosonotoPabrikGulaLestari_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_StasiunKertosonotoPabrikGulaLestari_7, 
                style: style_Shortest_StasiunKertosonotoPabrikGulaLestari_7,
                popuplayertitle: 'Shortest_Stasiun Kertosono to Pabrik Gula Lestari',
                interactive: true,
                title: '<img src="styles/legend/Shortest_StasiunKertosonotoPabrikGulaLestari_7.png" /> Shortest_Stasiun Kertosono to Pabrik Gula Lestari'
            });
var format_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8 = new ol.format.GeoJSON();
var features_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8 = format_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8.readFeatures(json_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8.addFeatures(features_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8);
var lyr_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8, 
                style: style_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8,
                popuplayertitle: 'Shortest_Stasiun Kertosono to Masjid Islamic Center Moeldoko Jombang',
                interactive: true,
                title: '<img src="styles/legend/Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8.png" /> Shortest_Stasiun Kertosono to Masjid Islamic Center Moeldoko Jombang'
            });
var format_Fastest_StasiunKertosonotoPasarSambikenceng_9 = new ol.format.GeoJSON();
var features_Fastest_StasiunKertosonotoPasarSambikenceng_9 = format_Fastest_StasiunKertosonotoPasarSambikenceng_9.readFeatures(json_Fastest_StasiunKertosonotoPasarSambikenceng_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fastest_StasiunKertosonotoPasarSambikenceng_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fastest_StasiunKertosonotoPasarSambikenceng_9.addFeatures(features_Fastest_StasiunKertosonotoPasarSambikenceng_9);
var lyr_Fastest_StasiunKertosonotoPasarSambikenceng_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fastest_StasiunKertosonotoPasarSambikenceng_9, 
                style: style_Fastest_StasiunKertosonotoPasarSambikenceng_9,
                popuplayertitle: 'Fastest_Stasiun Kertosono to Pasar Sambikenceng',
                interactive: true,
                title: '<img src="styles/legend/Fastest_StasiunKertosonotoPasarSambikenceng_9.png" /> Fastest_Stasiun Kertosono to Pasar Sambikenceng'
            });
var format_Fastest_StasiunKertosonotoPasarKertosono_10 = new ol.format.GeoJSON();
var features_Fastest_StasiunKertosonotoPasarKertosono_10 = format_Fastest_StasiunKertosonotoPasarKertosono_10.readFeatures(json_Fastest_StasiunKertosonotoPasarKertosono_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fastest_StasiunKertosonotoPasarKertosono_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fastest_StasiunKertosonotoPasarKertosono_10.addFeatures(features_Fastest_StasiunKertosonotoPasarKertosono_10);
var lyr_Fastest_StasiunKertosonotoPasarKertosono_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fastest_StasiunKertosonotoPasarKertosono_10, 
                style: style_Fastest_StasiunKertosonotoPasarKertosono_10,
                popuplayertitle: 'Fastest_Stasiun Kertosono to Pasar Kertosono',
                interactive: true,
                title: '<img src="styles/legend/Fastest_StasiunKertosonotoPasarKertosono_10.png" /> Fastest_Stasiun Kertosono to Pasar Kertosono'
            });
var format_Fastest_StasiunKertosonotoPasarKedungringin_11 = new ol.format.GeoJSON();
var features_Fastest_StasiunKertosonotoPasarKedungringin_11 = format_Fastest_StasiunKertosonotoPasarKedungringin_11.readFeatures(json_Fastest_StasiunKertosonotoPasarKedungringin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fastest_StasiunKertosonotoPasarKedungringin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fastest_StasiunKertosonotoPasarKedungringin_11.addFeatures(features_Fastest_StasiunKertosonotoPasarKedungringin_11);
var lyr_Fastest_StasiunKertosonotoPasarKedungringin_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fastest_StasiunKertosonotoPasarKedungringin_11, 
                style: style_Fastest_StasiunKertosonotoPasarKedungringin_11,
                popuplayertitle: 'Fastest_Stasiun Kertosono to Pasar Kedungringin',
                interactive: true,
                title: '<img src="styles/legend/Fastest_StasiunKertosonotoPasarKedungringin_11.png" /> Fastest_Stasiun Kertosono to Pasar Kedungringin'
            });
var format_Fastest_StasiunKertosonotoPabrikGulaLestari_12 = new ol.format.GeoJSON();
var features_Fastest_StasiunKertosonotoPabrikGulaLestari_12 = format_Fastest_StasiunKertosonotoPabrikGulaLestari_12.readFeatures(json_Fastest_StasiunKertosonotoPabrikGulaLestari_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fastest_StasiunKertosonotoPabrikGulaLestari_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fastest_StasiunKertosonotoPabrikGulaLestari_12.addFeatures(features_Fastest_StasiunKertosonotoPabrikGulaLestari_12);
var lyr_Fastest_StasiunKertosonotoPabrikGulaLestari_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fastest_StasiunKertosonotoPabrikGulaLestari_12, 
                style: style_Fastest_StasiunKertosonotoPabrikGulaLestari_12,
                popuplayertitle: 'Fastest_Stasiun Kertosono to Pabrik Gula Lestari',
                interactive: true,
                title: '<img src="styles/legend/Fastest_StasiunKertosonotoPabrikGulaLestari_12.png" /> Fastest_Stasiun Kertosono to Pabrik Gula Lestari'
            });
var format_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13 = new ol.format.GeoJSON();
var features_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13 = format_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13.readFeatures(json_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13.addFeatures(features_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13);
var lyr_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13, 
                style: style_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13,
                popuplayertitle: 'Fastest_Stasiun Kertosono to Masjid Islamic Center Moeldoko Jombang',
                interactive: true,
                title: '<img src="styles/legend/Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13.png" /> Fastest_Stasiun Kertosono to Masjid Islamic Center Moeldoko Jombang'
            });
var format_Fastest_StasiunKertosonotoRSUDKertosono_14 = new ol.format.GeoJSON();
var features_Fastest_StasiunKertosonotoRSUDKertosono_14 = format_Fastest_StasiunKertosonotoRSUDKertosono_14.readFeatures(json_Fastest_StasiunKertosonotoRSUDKertosono_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fastest_StasiunKertosonotoRSUDKertosono_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fastest_StasiunKertosonotoRSUDKertosono_14.addFeatures(features_Fastest_StasiunKertosonotoRSUDKertosono_14);
var lyr_Fastest_StasiunKertosonotoRSUDKertosono_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fastest_StasiunKertosonotoRSUDKertosono_14, 
                style: style_Fastest_StasiunKertosonotoRSUDKertosono_14,
                popuplayertitle: 'Fastest_Stasiun Kertosono to RSUD Kertosono',
                interactive: true,
                title: '<img src="styles/legend/Fastest_StasiunKertosonotoRSUDKertosono_14.png" /> Fastest_Stasiun Kertosono to RSUD Kertosono'
            });
var format_Fastest_StasiunKertosonotoPasarRakyatLengkong_15 = new ol.format.GeoJSON();
var features_Fastest_StasiunKertosonotoPasarRakyatLengkong_15 = format_Fastest_StasiunKertosonotoPasarRakyatLengkong_15.readFeatures(json_Fastest_StasiunKertosonotoPasarRakyatLengkong_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fastest_StasiunKertosonotoPasarRakyatLengkong_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fastest_StasiunKertosonotoPasarRakyatLengkong_15.addFeatures(features_Fastest_StasiunKertosonotoPasarRakyatLengkong_15);
var lyr_Fastest_StasiunKertosonotoPasarRakyatLengkong_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fastest_StasiunKertosonotoPasarRakyatLengkong_15, 
                style: style_Fastest_StasiunKertosonotoPasarRakyatLengkong_15,
                popuplayertitle: 'Fastest_Stasiun Kertosono to Pasar Rakyat Lengkong',
                interactive: true,
                title: '<img src="styles/legend/Fastest_StasiunKertosonotoPasarRakyatLengkong_15.png" /> Fastest_Stasiun Kertosono to Pasar Rakyat Lengkong'
            });
var format_Lokasi_16 = new ol.format.GeoJSON();
var features_Lokasi_16 = format_Lokasi_16.readFeatures(json_Lokasi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_16.addFeatures(features_Lokasi_16);
var lyr_Lokasi_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_16, 
                style: style_Lokasi_16,
                popuplayertitle: 'Lokasi',
                interactive: true,
    title: 'Lokasi<br />\
    <img src="styles/legend/Lokasi_16_0.png" /> Masjid Islamic Center Moeldoko Jombang<br />\
    <img src="styles/legend/Lokasi_16_1.png" /> Pabrik Gula Lestari<br />\
    <img src="styles/legend/Lokasi_16_2.png" /> Pasar Kedungringin<br />\
    <img src="styles/legend/Lokasi_16_3.png" /> Pasar Kertosono<br />\
    <img src="styles/legend/Lokasi_16_4.png" /> Pasar Rakyat Lengkong<br />\
    <img src="styles/legend/Lokasi_16_5.png" /> Pasar Sambikenceng<br />\
    <img src="styles/legend/Lokasi_16_6.png" /> RSUD Kertosono<br />\
    <img src="styles/legend/Lokasi_16_7.png" /> Stasiun Kertosono<br />\
    <img src="styles/legend/Lokasi_16_8.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_Shortest_StasiunKertosonotoPasarSambikenceng_2.setVisible(true);lyr_Shortest_StasiunKertosonotoRSUDKertosono_3.setVisible(true);lyr_Shortest_StasiunKertosonotoPasarRakyatLengkong_4.setVisible(true);lyr_Shortest_StasiunKertosonotoPasarKertosono_5.setVisible(true);lyr_Shortest_StasiunKertosonotoPasarKedungringin_6.setVisible(true);lyr_Shortest_StasiunKertosonotoPabrikGulaLestari_7.setVisible(true);lyr_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8.setVisible(true);lyr_Fastest_StasiunKertosonotoPasarSambikenceng_9.setVisible(true);lyr_Fastest_StasiunKertosonotoPasarKertosono_10.setVisible(true);lyr_Fastest_StasiunKertosonotoPasarKedungringin_11.setVisible(true);lyr_Fastest_StasiunKertosonotoPabrikGulaLestari_12.setVisible(true);lyr_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13.setVisible(true);lyr_Fastest_StasiunKertosonotoRSUDKertosono_14.setVisible(true);lyr_Fastest_StasiunKertosonotoPasarRakyatLengkong_15.setVisible(true);lyr_Lokasi_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleEarth_1,lyr_Shortest_StasiunKertosonotoPasarSambikenceng_2,lyr_Shortest_StasiunKertosonotoRSUDKertosono_3,lyr_Shortest_StasiunKertosonotoPasarRakyatLengkong_4,lyr_Shortest_StasiunKertosonotoPasarKertosono_5,lyr_Shortest_StasiunKertosonotoPasarKedungringin_6,lyr_Shortest_StasiunKertosonotoPabrikGulaLestari_7,lyr_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8,lyr_Fastest_StasiunKertosonotoPasarSambikenceng_9,lyr_Fastest_StasiunKertosonotoPasarKertosono_10,lyr_Fastest_StasiunKertosonotoPasarKedungringin_11,lyr_Fastest_StasiunKertosonotoPabrikGulaLestari_12,lyr_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13,lyr_Fastest_StasiunKertosonotoRSUDKertosono_14,lyr_Fastest_StasiunKertosonotoPasarRakyatLengkong_15,lyr_Lokasi_16];
lyr_Shortest_StasiunKertosonotoPasarSambikenceng_2.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Shortest_StasiunKertosonotoRSUDKertosono_3.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Shortest_StasiunKertosonotoPasarRakyatLengkong_4.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Shortest_StasiunKertosonotoPasarKertosono_5.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Shortest_StasiunKertosonotoPasarKedungringin_6.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Shortest_StasiunKertosonotoPabrikGulaLestari_7.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Fastest_StasiunKertosonotoPasarSambikenceng_9.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Fastest_StasiunKertosonotoPasarKertosono_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Fastest_StasiunKertosonotoPasarKedungringin_11.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Fastest_StasiunKertosonotoPabrikGulaLestari_12.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Fastest_StasiunKertosonotoRSUDKertosono_14.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Fastest_StasiunKertosonotoPasarRakyatLengkong_15.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Lokasi_16.set('fieldAliases', {'Lokasi': 'Lokasi', 'x': 'x', 'y': 'y', });
lyr_Shortest_StasiunKertosonotoPasarSambikenceng_2.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Shortest_StasiunKertosonotoRSUDKertosono_3.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Shortest_StasiunKertosonotoPasarRakyatLengkong_4.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Shortest_StasiunKertosonotoPasarKertosono_5.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Shortest_StasiunKertosonotoPasarKedungringin_6.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Shortest_StasiunKertosonotoPabrikGulaLestari_7.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Fastest_StasiunKertosonotoPasarSambikenceng_9.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Fastest_StasiunKertosonotoPasarKertosono_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Fastest_StasiunKertosonotoPasarKedungringin_11.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Fastest_StasiunKertosonotoPabrikGulaLestari_12.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Fastest_StasiunKertosonotoRSUDKertosono_14.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Fastest_StasiunKertosonotoPasarRakyatLengkong_15.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Lokasi_16.set('fieldImages', {'Lokasi': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Shortest_StasiunKertosonotoPasarSambikenceng_2.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Shortest_StasiunKertosonotoRSUDKertosono_3.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Shortest_StasiunKertosonotoPasarRakyatLengkong_4.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Shortest_StasiunKertosonotoPasarKertosono_5.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Shortest_StasiunKertosonotoPasarKedungringin_6.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Shortest_StasiunKertosonotoPabrikGulaLestari_7.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Shortest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_8.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Fastest_StasiunKertosonotoPasarSambikenceng_9.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Fastest_StasiunKertosonotoPasarKertosono_10.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Fastest_StasiunKertosonotoPasarKedungringin_11.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Fastest_StasiunKertosonotoPabrikGulaLestari_12.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Fastest_StasiunKertosonotoMasjidIslamicCenterMoeldokoJombang_13.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Fastest_StasiunKertosonotoRSUDKertosono_14.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Fastest_StasiunKertosonotoPasarRakyatLengkong_15.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'header label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'OPTIONS': 'header label - visible with data', 'FROM_ID': 'header label - visible with data', 'TO_ID': 'header label - visible with data', });
lyr_Lokasi_16.set('fieldLabels', {'Lokasi': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', });
lyr_Lokasi_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});