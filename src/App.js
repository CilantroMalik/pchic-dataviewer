import './App.css';
import './main.css';
import { AssetChooser } from './features/assetChooser/AssetChooser';
import { PlotViewer } from './features/plotViewer/PlotViewer'
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setVisible } from "./features/infoModal/infoSlice";

function App() {

  const dispatch = useDispatch()
  const plotType = useSelector(state => state.assets.assetType)
  const info = useSelector(state => state.info.visible)

  let explanation = ""

  if (plotType === "Contact Plots") {
    explanation = "These plots depict the raw counts of PC-HiC observed interactions vs genomic distance from the bait locus. " +
        "The p-values corresponding to the determined significance of each interaction are also plotted in red on a negative log scale."
  }
  else if (plotType === "Coefficients (all) & Significance") {
    explanation = "These plots show the relationship between regression coefficients and Hi-C identified features of interest. " +
        "Coefficients corresponding to each tile in the regression model were tagged with 'significance' based " +
        "on the PC-HiC restriction fragment in which they were contained; if the fragment was part of a significant " +
        "interaction, the coefficient was labeled 'significant', and vice versa. The histogram of coefficient values " +
        "was then split based on this factor."
  }
  else if (plotType === "Coefficients (max per fragment) & Significance") {
    explanation = "These plots show the relationship between regression coefficients and Hi-C identified features of interest. " +
        "The values of the maximum coefficient from the tiles contained in each PC-HiC restriction fragment pertaining to the selected " +
        "gene (or all genes, if chosen) were plotted in these graphs. If a restriction fragment participated in a significant " +
        "interaction, its max coefficient is labeled 'significant'; the distributions are separated out based on this."
  }
  else {
    explanation = "These plots graph the empirical cumulative distribution function of the coefficients pertaining to tiles " +
        "within the locus of the selected gene, or all genes combined if selected. Separated by significance in " +
        "a similar manner to the histogram plots, with different ECDFs plotted in green and red for significant " +
        "and insignificant respectively."
  }

  return (
      <>
        <div className="App" style={info ? {transition: "filter 0.3s ease-out", filter: "blur(10px) opacity(50%) brightness(50%)"} : {transition: "filter 0.3s ease-in"}}>
          <AssetChooser />
          <PlotViewer />
        </div>
        { info &&
        <div style={{borderRadius: "15px", position: "absolute", top: "25vh", left: "25vw",
          width: "50%", backgroundColor: "gray", textAlign: "center"}}>
          <h3 style={{color: "antiquewhite"}}>{plotType}</h3>
          <p style={{margin: "3%"}}>{explanation}</p>
          <button onClick={() => dispatch(setVisible(false))} style={{marginBottom: "3%"}}>Close</button>
        </div>
        }
      </>
  );
}

export default App;