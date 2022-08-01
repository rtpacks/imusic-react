import React, { memo } from "react";
import styled from "@emotion/styled";

const Ellipsis = memo(
  styled.div`
    display: -webkit-box !important;
    overflow: hidden !important;
    margin: 0 auto;
    padding: 2px 0;

    width: ${(props) => props.width || "98%"}!important;
    -webkit-line-clamp: ${(props) => props.clamp || 1}!important;
    text-overflow: ellipsis;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    word-break: break-all;

    color: #666;

    font-size: 12px;  
    line-height: 1.2;
    
    transition: all .3s;

    &:hover {
      color: ${(props) => props.activeColor || "#e75555"};
    }

  `
);

export default Ellipsis;
