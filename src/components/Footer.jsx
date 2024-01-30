import React from 'react';
//Components
import FooterContactMe from '../page-components/FooterContactMe';
import FooterFiles from '../page-components/FooterFiles';
import FooterSocials from '../page-components/FooterSocials';

export default function Footer({refer}) {
  return (
    <div className='footerDiv' ref={refer}>
        <FooterContactMe/>
        <div className='verticalLine'></div>
        <FooterFiles/>
        <div className='verticalLine'></div>
        <FooterSocials/>
    </div>
  );
}
