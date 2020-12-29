import React from 'react';
import {CardForm , Card, BulateInfoCard } from './styles/global'


export function CardForms({children, directionChildren, justifyContent, marginTop, marginBottom}) {
  return (
    <CardForm
      directionChildren={directionChildren}
      justifyContent={justifyContent}
      marginTop={marginTop}
      marginBottom={marginBottom}>
        {children}
    </CardForm>
  );


}






export function Cards({children, directionChildren, width, height, corButton}) {
  return (
    <Card corButton={corButton}
      directionChildren={directionChildren}
      width={width}
      height={height}
    >
        {children}
    </Card>
  );
}




export function BulateInfoCards({userLogado, frasiologia}) {
  return (
    <BulateInfoCard>
        <strong>{ userLogado || "" }</strong>
        <p> 
            { frasiologia || "" }
        </p>
    </BulateInfoCard>
  );
}









export default CardForms;