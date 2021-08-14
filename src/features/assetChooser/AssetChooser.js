import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCellType1, setCellType2, setAssetType, setGene } from "./assetSlice";
import { setVisible } from "../infoModal/infoSlice";
import '../../main.css';
import { nanoid } from "@reduxjs/toolkit";

export const AssetChooser = () => {
    const options = useSelector(state => state.assets)
    const [typesSelected, setTypesSelected] = useState([])
    const [geneSelected, setGeneSelected] = useState("IL7R")
    const [selecting, setSelecting] = useState(false)
    const [dimmed, setDimmed] = useState(false)
    const dispatch = useDispatch()

    const allowedGenes = ["AIF1", "ANK3", "AOAH", "ATG7", "ATP2B1", "BACH1",
        "CD7", "CD74", "CLEC12A", "CTSS", "DLEU2",  "DUSP6", "EVI5", "FGL2",
        "FOSB", "GPCPD1", "GSAP", "HLA-DMA", "HLA-DMB", "HLA-DQB1", "HLA-DRB1",
        "IL7R", "JAZF1", "JUN", "LEF1", "LTB", "LYST", "MARCH1", "MEGF9", "MTSS1",
        "MXD1", "MYADM", "NEAT1",  "NUMB", "PARP14", "POU2F2", "PRKCH", "PSTPIP2",
        "QKI", "RGS2", "RPL11", "RPL13A", "RPS18", "SAT1", "SCLT1", "PSAP",
        "SIPA1L1", "SKAP1", "SLFN12L", "SRGN", "TBXAS1", "TET3"]

    const cellTypes = ["aCD4", "EP", "Ery", "FoeT", "Mac0", "Mac1", "Mac2", "MK", "Mon", "naCD4", "nB", "nCD4", "nCD8", "Neu", "tB", "tCD8"]

    const onCellTypeClicked = (cellType) => {
        if (!typesSelected.includes(cellType)) {
            const temp = typesSelected
            temp.push(cellType)
            setTypesSelected(temp)
        }
        if (typesSelected.length === 2) {
            setSelecting(false)
            dispatch(setCellType1(typesSelected[0]))
            dispatch(setCellType2(typesSelected[1]))
        }
    }

    const onPlotTypeClicked = (plotType) => {
        if (options.gene === "all" && (plotType === "Coefficients (all) & Significance" || plotType === "Contact Plots")) { dispatch(setGene("ERROR2")) }
        dispatch(setAssetType(plotType))
    }

    const onGeneClicked = () => {
        if (allowedGenes.includes(geneSelected)) { dispatch(setGene(geneSelected)) }
        else { dispatch(setGene("ERROR")) }
    }

    const onReselectClicked = () => {
        setSelecting(true)
        setTypesSelected([])
    }

    const allGenesClicked = () => {
        setDimmed(true)
        dispatch(setGene("all"))
    }

    const infoClicked = () => { dispatch(setVisible(true)) }

    const cellButtons = cellTypes.map(cellType => (
        <button disabled={!selecting} className={(options.cellType1 === cellType || options.cellType2 === cellType) ? "button" : "muted-button"}
                key={nanoid()} onClick={() => onCellTypeClicked(cellType)} style={{margin: "3px", padding: "8px"}}>{cellType}</button>
    ))

    const plotButtons = ["Contact Plots", "Coefficients (all) & Significance", "Coefficients (max per fragment) & Significance", "ECDFs"].map(plotType => (
        <button className={options.assetType === plotType ? "button" : "muted-button"} key={nanoid()}
                onClick={() => onPlotTypeClicked(plotType)} style={{margin: "3px", padding: "8px"}}>{plotType}</button>
    ))

    return (
        <>
            <div className="flex-row" style={{width: "100%", marginTop: "0.5rem", marginLeft: "0.5rem"}}>
                <button style={{margin: "3px"}} onClick={onReselectClicked} className="accent-button">{selecting ? "Select two..." : "Reselect Cell Types"}</button>
                {cellButtons}
            </div>
            <div className="flex-row" style={{width: "100%", marginTop: "0.5rem", marginLeft: "0.5rem"}}>
                {plotButtons}
                <button className="round-button" onClick={infoClicked}
                        style={{borderColor: "mediumpurple", backgroundColor: "mediumpurple", margin: "3px", padding: "12px", marginLeft: "6px"}}>Figure Info</button>
            </div>
            <div className="flex-row" style={{width: "100%", marginTop: "0.5rem", marginLeft: "0.5rem"}}>
                <button className={options.gene === "all" ? "button" : "muted-button"} onClick={allGenesClicked} disabled={options.assetType === "Contact Plots" || options.assetType === "Coefficients (all) & Significance"}
                        style={options.assetType === "Contact Plots" || options.assetType === "Coefficients (all) & Significance" ? {backgroundColor: "lightcoral", borderColor: "lightcoral", marginRight: "10px", marginTop: "0.2rem", opacity: "0.5"} : {marginRight: "10px", marginTop: "0.2rem"}}>All Genes</button>
                <input style={{color: "antiquewhite", flexBasis: "50%", marginLeft: "0.2rem", marginTop: "0.2rem", opacity: dimmed ? "0.5" : "1"}}
                       placeholder={geneSelected} type="text" onChange={(e) => { setDimmed(false); setGeneSelected(e.target.value) }}/>
                <button style={{marginLeft: "10px", marginTop: "0.2rem", opacity: dimmed ? "0.5" : "1"}} onClick={onGeneClicked}>Choose Gene</button>
            </div>
        </>
    )
}