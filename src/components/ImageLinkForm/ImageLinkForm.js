import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return(
    <div>
    	<p className='f3'>
    		{'This magic brain will detect faces in your pictures. Give it a try'}
    	</p>
	    	<div className='center'>
	    		<div className=' center formBackground pa4 br3 shadow-5'>
		    		<input className='f4 w-70 center br3' type='url' />
		    		<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple br3'>Detect</button>
	    		</div>
	    	</div>
    </div>
  );
}

export default ImageLinkForm;