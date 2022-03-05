import React from 'react';
import CardContainer from "../layout/CardContainer";
import ImageContainer from "../layout/ImageContainer";
import CardBody from "../layout/CardBody";
import animations from "../../../../styles/modules/Animation.module.css";

const CardSkeleton = () => {
    return (
        <CardContainer>
            <ImageContainer>
                <div className={`${animations.skeleton} ${animations.skeletonImage}`}/>
            </ImageContainer>
            <CardBody>
                <p className={`${animations.skeleton} ${animations.skeletonDate}`}/>
                <h4 className={`${animations.skeleton} ${animations.skeletonText}`}/>
            </CardBody>
        </CardContainer>
    );
};

export default CardSkeleton;