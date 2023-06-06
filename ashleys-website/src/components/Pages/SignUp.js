import React from 'react'
import '../../App.css';
// var Latex = require("react-latex")
import HeroSection from '../HeroSection';
var Latex = require("react-latex")
function SignUp() {
    const documentClass = `$$\\documentclass[11pt, a4paper, oneside, openright]{custard}$$`
    const beginDocument = `$$\\begin{document}$$`
    const documentClass1 = `$$\\chapter{Introduction} Testing testing$$` 
    return (
        <div style={{fontsize: 30}}>
        <Latex>
            {documentClass}
        </Latex>
        <Latex>
            {beginDocument}
        </Latex>
        </div>
    );
}
export default SignUp