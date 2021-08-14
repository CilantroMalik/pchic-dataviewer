import React from 'react';
import { useSelector} from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import '../../main.css';

export const PlotViewer = () => {
    const options = useSelector(state => state.assets)

    const allowedGenes = ["AIF1", "ANK3", "AOAH", "ATG7", "ATP2B1", "BACH1",
        "CD7", "CD74", "CLEC12A", "CTSS", "DLEU2",  "DUSP6", "EVI5", "FGL2",
        "FOSB", "GPCPD1", "GSAP", "HLA-DMA", "HLA-DMB", "HLA-DQB1", "HLA-DRB1",
        "IL7R", "JAZF1", "JUN", "LEF1", "LTB", "LYST", "MARCH1", "MEGF9", "MTSS1",
        "MXD1", "MYADM", "NEAT1",  "NUMB", "PARP14", "POU2F2", "PRKCH", "PSTPIP2",
        "QKI", "RGS2", "RPL11", "RPL13A", "RPS18", "SAT1", "SCLT1", "PSAP",
        "SIPA1L1", "SKAP1", "SLFN12L", "SRGN", "TBXAS1", "TET3", "", "", "", "", "", "", "", ""]

    const geneTableRows = []

    for (let i = 0; i < 51; i += 10) {
        const row = <tr>
            {allowedGenes.slice(i, i+10).map(geneName => {
                return (<td key={nanoid()} style={{fontSize: "1.3rem", textAlign: "center"}}>{geneName}</td>)
            })}
        </tr>
        geneTableRows.push(row)
    }

    let plotType = ""
    let filename = ""
    if (options.assetType === "Contact Plots") { plotType = "contactPlots"; filename = options.gene+".png" }
    else if (options.assetType === "Coefficients (all) & Significance") { plotType = "genes"; filename = options.gene+"-significanceCoefs.png" }
    else if (options.assetType === "Coefficients (max per fragment) & Significance") { plotType = "genesMax"; filename = options.gene+"-significanceMaxCoefs.png" }
    else if (options.assetType === "ECDFs") { plotType = "ECDFs"; filename = options.gene+"_maxCoefs_ecdf.png" }

    if (options.gene === "all") {
        if (options.assetType === "Coefficients (max per fragment) & Significance") { filename = "allGenes-significanceMaxCoefs.png" }
        else if (options.assetType === "ECDFs") { filename = "master_maxCoefs_ecdf.png" }
    }

    return (
        <>
            { options.gene === "ERROR2" && <h3 style={{color: "antiquewhite"}}>This plot type does not have an "all genes" option. Choose an individual gene to view its plots.</h3> }
            { (options.gene !== "ERROR" && options.gene !== "ERROR2") &&
                <div className="flex-row" style={{width: "100%", marginTop: "0.5rem", marginLeft: "0.5rem"}}>
                    <h2 style={{
                        color: "antiquewhite",
                        marginTop: "19%",
                        marginRight: "10px"
                    }}>{options.cellType1}</h2>
                    <img style={{width: "38%", height: "38%", margin: "10px", borderRadius: "10px"}}
                         src={process.env.PUBLIC_URL + "/images/" + options.cellType1 + "/" + plotType + "/" + filename}
                         alt=""/>
                    <img style={{width: "38%", height: "38%", margin: "10px", borderRadius: "10px"}}
                         src={process.env.PUBLIC_URL + "/images/" + options.cellType2 + "/" + plotType + "/" + filename}
                         alt=""/>
                    <h2 style={{
                        color: "antiquewhite",
                        marginTop: "19%",
                        marginLeft: "10px"
                    }}>{options.cellType2}</h2>
                </div>
            }
            { (options.gene === "ERROR" && options.gene !== "ERROR2") &&
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h3 style={{color: "antiquewhite"}}>That gene isn't available — perhaps it was mistyped?</h3>
                    <h5 style={{color: "antiquewhite"}}>Available Genes</h5>
                    <table style={{width: "94%", marginLeft: "3%", marginRight: "3%"}}>
                        <thead><tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead>
                        <tbody>{geneTableRows}</tbody>
                        <tfoot><tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></tfoot>
                    </table>
                </div>
            }
        </>
    )
}
