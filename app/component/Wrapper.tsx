"use client";
import React from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div css={wrapperStyle}>
            {children}
        </div>
    );
};

export default Wrapper;

const wrapperStyle = css`
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
`   