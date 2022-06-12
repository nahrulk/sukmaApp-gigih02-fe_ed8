import React, { Component } from 'react';
import Flashcards from '../../Components/Flashcard/Flashcard';
import './Flashcardpage.css'

const Flashcardpage = () => {
    const items = [{
      id: 1,
      front: {
        type: 'string',
        display: 'APA ITU CYBERBULLYING?',
      },
      back: {
        type: 'string',
        display: `Cyber bullying adalah kejadian dimana seorang anak atau remaja diejek, dihina, diintimidasi, atau dipermalukan oleh anak atau remaja lain melalui media internet, teknologi digital atau telepon seluler.`
      }
    }, {
      id: 2,
      front: {
        type: 'string',
        display: 'Contoh Cyberbullying',
      },
      back: {
        type: 'string',
        display: 'Menyebarkan kebohongan tentang seseorang atau memposting foto memalukan tentang seseorang di media sosial.',
      }
    }, {
      id: 3,
      front: {
        type: 'string',
        display: 'Apa dampak negatif dari cyberbullying?',
      },
      back: {
        type: 'string',
        display: 'Merasa dikucilkan dan terisolasi dari orang lain. Merasa insecure dan tidak berdaya. Merasa kesal atau marah pada pelaku cyberbullying.',
      }
    }, {
      id: 4,
      front: {
        type: 'string',
        display: 'Apa hukuman bagi pelaku cyberbullying?',
      },
      back: {
        type: 'string',
        display: 'Adapun ancaman pidana bagi mereka yang memenuhi unsur dalam Pasal 27 ayat (3) UU 19/2016 adalah dipidana dengan pidana penjara paling lama 4 (empat) tahun dan/atau denda paling banyak Rp 750 juta.',
      }
    }, {
      id: 5,
      front: {
        type: 'string',
        display: 'Apa hukuman bagi pelaku cyberbullying?',
      },
      back: {
        type: 'string',
        display: 'Adapun ancaman pidana bagi mereka yang memenuhi unsur dalam Pasal 27 ayat (3) UU 19/2016 adalah dipidana dengan pidana penjara paling lama 4 (empat) tahun dan/atau denda paling banyak Rp 750 juta.',
      }
    },{
      id: 6,
      front: {
        type: 'string',
        display: 'Apa hukuman bagi pelaku cyberbullying?',
      },
      back: {
        type: 'string',
        display: 'Adapun ancaman pidana bagi mereka yang memenuhi unsur dalam Pasal 27 ayat (3) UU 19/2016 adalah dipidana dengan pidana penjara paling lama 4 (empat) tahun dan/atau denda paling banyak Rp 750 juta.',
      }
    }, {
      id: 7,
      front: {
        type: 'string',
        display: 'Apa hukuman bagi pelaku cyberbullying?',
      },
      back: {
        type: 'string',
        display: 'Adapun ancaman pidana bagi mereka yang memenuhi unsur dalam Pasal 27 ayat (3) UU 19/2016 adalah dipidana dengan pidana penjara paling lama 4 (empat) tahun dan/atau denda paling banyak Rp 750 juta.' ,
      }
    }];
    return (
      <body>
        <div className="Flashcardpage">
          <h1>CYBERBULLYING</h1>
          <Flashcards items={items}/>
        </div>
        
        <button class="button_back">Back</button>
      </body>
    );
}

export default Flashcardpage;
