import React, { useState } from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './CV.css';
import PDFViewer from './PDFViewer';

export default function CV() {
    const pdfRoute = ASSET_PATHS.PDF_URL

    const pdfFileUrl = `${pdfRoute}/cv.pdf`;

    console.log("pdfFileUrl", pdfFileUrl);
    const [pdfUrl, setPdfUrl] = useState(pdfFileUrl);


    return (
        <Layout>
            <div>
                <h1>PDF Viewer</h1>


            </div>
        </Layout >



    );

}
