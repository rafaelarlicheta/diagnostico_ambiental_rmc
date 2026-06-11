ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([416329.037771, 7054148.300402, 883111.571696, 7303975.572080]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIOcean_1 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraydark_2 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_ConflitosAmbientais20002024_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Conflitos Ambientais (2000-2024)<br />\
    <img src="styles/legend/ConflitosAmbientais20002024_3_0.png" /> Remanescente Conservado<br />\
    <img src="styles/legend/ConflitosAmbientais20002024_3_1.png" /> Conflito Ocasional<br />\
    <img src="styles/legend/ConflitosAmbientais20002024_3_2.png" /> Conflito Recorrente<br />\
    <img src="styles/legend/ConflitosAmbientais20002024_3_3.png" /> Conflito Frequente<br />\
    <img src="styles/legend/ConflitosAmbientais20002024_3_4.png" /> Conflito Elevado<br />\
    <img src="styles/legend/ConflitosAmbientais20002024_3_5.png" /> Conflito Crítico Persistente<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ConflitosAmbientais20002024_3.png",
            attributions: ' ',
            projection: 'EPSG:31982',
            alwaysInRange: true,
            imageExtent: [607106.373900, 7097244.724100, 760948.589100, 7283309.143800]
        })
    });
var format_reasEstratgicas_4 = new ol.format.GeoJSON();
var features_reasEstratgicas_4 = format_reasEstratgicas_4.readFeatures(json_reasEstratgicas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasEstratgicas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasEstratgicas_4.addFeatures(features_reasEstratgicas_4);
var lyr_reasEstratgicas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasEstratgicas_4, 
                style: style_reasEstratgicas_4,
                popuplayertitle: 'Áreas Estratégicas',
                interactive: true,
    title: 'Áreas Estratégicas<br />\
    <img src="styles/legend/reasEstratgicas_4_0.png" /> Área Conservada<br />\
    <img src="styles/legend/reasEstratgicas_4_1.png" /> Conflito Crítico Persistente<br />' });
var format_UnidadedeConservaoEstadual_5 = new ol.format.GeoJSON();
var features_UnidadedeConservaoEstadual_5 = format_UnidadedeConservaoEstadual_5.readFeatures(json_UnidadedeConservaoEstadual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UnidadedeConservaoEstadual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeConservaoEstadual_5.addFeatures(features_UnidadedeConservaoEstadual_5);
var lyr_UnidadedeConservaoEstadual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeConservaoEstadual_5, 
                style: style_UnidadedeConservaoEstadual_5,
                popuplayertitle: 'Unidade de Conservação Estadual',
                interactive: true,
                title: '<img src="styles/legend/UnidadedeConservaoEstadual_5.png" /> Unidade de Conservação Estadual'
            });
var format_UnidadedeConservaoMunicipal_6 = new ol.format.GeoJSON();
var features_UnidadedeConservaoMunicipal_6 = format_UnidadedeConservaoMunicipal_6.readFeatures(json_UnidadedeConservaoMunicipal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UnidadedeConservaoMunicipal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadedeConservaoMunicipal_6.addFeatures(features_UnidadedeConservaoMunicipal_6);
var lyr_UnidadedeConservaoMunicipal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadedeConservaoMunicipal_6, 
                style: style_UnidadedeConservaoMunicipal_6,
                popuplayertitle: 'Unidade de Conservação Municipal',
                interactive: true,
                title: '<img src="styles/legend/UnidadedeConservaoMunicipal_6.png" /> Unidade de Conservação Municipal'
            });
var format_MunicpiosdaRMC_7 = new ol.format.GeoJSON();
var features_MunicpiosdaRMC_7 = format_MunicpiosdaRMC_7.readFeatures(json_MunicpiosdaRMC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MunicpiosdaRMC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosdaRMC_7.addFeatures(features_MunicpiosdaRMC_7);
var lyr_MunicpiosdaRMC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosdaRMC_7, 
                style: style_MunicpiosdaRMC_7,
                popuplayertitle: 'Municípios da RMC',
                interactive: false,
                title: '<img src="styles/legend/MunicpiosdaRMC_7.png" /> Municípios da RMC'
            });
var format_RegioMetropolitanadeCuritibaRMC_8 = new ol.format.GeoJSON();
var features_RegioMetropolitanadeCuritibaRMC_8 = format_RegioMetropolitanadeCuritibaRMC_8.readFeatures(json_RegioMetropolitanadeCuritibaRMC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RegioMetropolitanadeCuritibaRMC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioMetropolitanadeCuritibaRMC_8.addFeatures(features_RegioMetropolitanadeCuritibaRMC_8);
var lyr_RegioMetropolitanadeCuritibaRMC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioMetropolitanadeCuritibaRMC_8, 
                style: style_RegioMetropolitanadeCuritibaRMC_8,
                popuplayertitle: 'Região Metropolitana de Curitiba (RMC)',
                interactive: true,
                title: '<img src="styles/legend/RegioMetropolitanadeCuritibaRMC_8.png" /> Região Metropolitana de Curitiba (RMC)'
            });
var group_Limites = new ol.layer.Group({
                                layers: [lyr_UnidadedeConservaoEstadual_5,lyr_UnidadedeConservaoMunicipal_6,lyr_MunicpiosdaRMC_7,lyr_RegioMetropolitanadeCuritibaRMC_8,],
                                fold: 'open',
                                title: 'Limites'});
var group_ConflitosAmbientaisereasEstratgicasParaConservaodoBiomaMataAtlntica = new ol.layer.Group({
                                layers: [lyr_ConflitosAmbientais20002024_3,lyr_reasEstratgicas_4,],
                                fold: 'open',
                                title: 'Conflitos Ambientais e Áreas Estratégicas Para Conservação do Bioma Mata Atlântica '});
var group_AnliseEspaoTemporal = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Análise Espaço-Temporal'});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_ESRIOcean_1,lyr_ESRIGraydark_2,],
                                fold: 'close',
                                title: 'BaseMap'});
var group_2024 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2024'});
var group_BASES = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BASES'});
var group_2000 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2000'});
var group_2012 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2012'});
var group_2018 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2018'});
var group_2020 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '2020'});
var group_DADOS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'DADOS'});

lyr_GoogleSatellite_0.setVisible(false);lyr_ESRIOcean_1.setVisible(false);lyr_ESRIGraydark_2.setVisible(true);lyr_ConflitosAmbientais20002024_3.setVisible(true);lyr_reasEstratgicas_4.setVisible(true);lyr_UnidadedeConservaoEstadual_5.setVisible(false);lyr_UnidadedeConservaoMunicipal_6.setVisible(false);lyr_MunicpiosdaRMC_7.setVisible(false);lyr_RegioMetropolitanadeCuritibaRMC_8.setVisible(true);
var layersList = [group_BaseMap,group_ConflitosAmbientaisereasEstratgicasParaConservaodoBiomaMataAtlntica,group_Limites];
lyr_reasEstratgicas_4.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'categoria': 'categoria', 'conflito': 'conflito', });
lyr_UnidadedeConservaoEstadual_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'Nome_da_UC': 'Nome_da_UC', 'Zona_de_Amortecimento': 'Zona_de_Amortecimento', 'Ato_legal_de_criação': 'Ato_legal_de_criação', 'Município': 'Município', 'Gestão': 'Gestão', 'Tipo': 'Tipo', 'Situação': 'Situação', 'Ano_do_limite': 'Ano_do_limite', 'Classe_SNUC': 'Classe_SNUC', 'Área_decreto': 'Área_decreto', 'Categoria': 'Categoria', 'Código_CNUC': 'Código_CNUC', 'Domínio': 'Domínio', 'Código_CEUC': 'Código_CEUC', 'st_area_shape_': 'st_area_shape_', 'st_perimeter_shape_': 'st_perimeter_shape_', });
lyr_UnidadedeConservaoMunicipal_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'nome': 'nome', 'Origem': 'Origem', 'municipio': 'municipio', 'Ato_Legal': 'Ato_Legal', 'Area_legal': 'Area_legal', 'Area_shape': 'Area_shape', 'st_area_shape_': 'st_area_shape_', 'st_perimeter_shape_': 'st_perimeter_shape_', });
lyr_MunicpiosdaRMC_7.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_RegioMetropolitanadeCuritibaRMC_8.set('fieldAliases', {'fid': 'fid', 'CD_MESO': 'CD_MESO', 'NM_MESO': 'NM_MESO', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_reasEstratgicas_4.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'conflito': 'TextEdit', });
lyr_UnidadedeConservaoEstadual_5.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'Range', 'Nome_da_UC': 'TextEdit', 'Zona_de_Amortecimento': 'TextEdit', 'Ato_legal_de_criação': 'TextEdit', 'Município': 'TextEdit', 'Gestão': 'TextEdit', 'Tipo': 'TextEdit', 'Situação': 'TextEdit', 'Ano_do_limite': 'TextEdit', 'Classe_SNUC': 'TextEdit', 'Área_decreto': 'TextEdit', 'Categoria': 'TextEdit', 'Código_CNUC': 'TextEdit', 'Domínio': 'TextEdit', 'Código_CEUC': 'TextEdit', 'st_area_shape_': 'TextEdit', 'st_perimeter_shape_': 'TextEdit', });
lyr_UnidadedeConservaoMunicipal_6.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'Range', 'nome': 'TextEdit', 'Origem': 'TextEdit', 'municipio': 'TextEdit', 'Ato_Legal': 'TextEdit', 'Area_legal': 'TextEdit', 'Area_shape': 'TextEdit', 'st_area_shape_': 'TextEdit', 'st_perimeter_shape_': 'TextEdit', });
lyr_MunicpiosdaRMC_7.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_RegioMetropolitanadeCuritibaRMC_8.set('fieldImages', {'fid': 'TextEdit', 'CD_MESO': 'TextEdit', 'NM_MESO': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_reasEstratgicas_4.set('fieldLabels', {'fid': 'hidden field', 'nome': 'header label - always visible', 'categoria': 'header label - always visible', 'conflito': 'header label - always visible', });
lyr_UnidadedeConservaoEstadual_5.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'Nome_da_UC': 'header label - always visible', 'Zona_de_Amortecimento': 'hidden field', 'Ato_legal_de_criação': 'hidden field', 'Município': 'hidden field', 'Gestão': 'hidden field', 'Tipo': 'header label - always visible', 'Situação': 'hidden field', 'Ano_do_limite': 'hidden field', 'Classe_SNUC': 'header label - always visible', 'Área_decreto': 'hidden field', 'Categoria': 'header label - always visible', 'Código_CNUC': 'hidden field', 'Domínio': 'hidden field', 'Código_CEUC': 'hidden field', 'st_area_shape_': 'hidden field', 'st_perimeter_shape_': 'hidden field', });
lyr_UnidadedeConservaoMunicipal_6.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'nome': 'header label - always visible', 'Origem': 'hidden field', 'municipio': 'hidden field', 'Ato_Legal': 'hidden field', 'Area_legal': 'hidden field', 'Area_shape': 'hidden field', 'st_area_shape_': 'hidden field', 'st_perimeter_shape_': 'hidden field', });
lyr_MunicpiosdaRMC_7.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_RegioMetropolitanadeCuritibaRMC_8.set('fieldLabels', {'fid': 'hidden field', 'CD_MESO': 'hidden field', 'NM_MESO': 'hidden field', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', });
lyr_RegioMetropolitanadeCuritibaRMC_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});