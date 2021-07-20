import React from 'react';
import './FAQ.css';
import Form_landing from './Form_landing';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

function FAQ() {

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('closed');

    const clicked = () => {

        setOpen(!open);
        
        if (open) {
            setStatus('opened');
        }
        else{
            setStatus('closed');
        };
        
    }

    return (
        <div className='faq'>
            <h1>Frequently Asked Questions</h1>

            <ul className='faq__list'>
                <li className='faq__list-item'>
                    <button>
                        What is Netflix? <AddIcon />{' '}
                    </button>
                    {/* <div className='faq__list-item-dropdown'>
                        <p className='faq__list-item-dropdown-top'>
                            Netflix is a streaming service that offers a wide
                            variety of award-winning TV shows, movies, anime,
                            documentaries, and more on thousands of
                            internet-connected devices.
                        </p>
                        <p className='faq__list-item-dropdown-bottom'>
                            You can watch as much as you want, whenever you want
                            without a single commercial - all for one low
                            monthly price. There's always something new to
                            discover and new TV shows and movies are added every
                            week!
                        </p>
                    </div> */}
                </li>
                <li className='faq__list-item'>
                    <button>
                        How much does Netflix cost? <AddIcon />{' '}
                    </button>
                    {/* <div className='faq__list-item-dropdown'>
                        <p className='faq__list-item-dropdown-top'>
                            Watch Netflix on your smartphone, tablet, Smart TV,
                            laptop, or streaming device, all for one fixed
                            monthly fee. Plans range from USD7.99 to USD13.99 a
                            month.No extra costs, no contracts.
                        </p>
                    </div> */}
                </li>
                <li className='faq__list-item'>
                    <button>
                        Where can I watch? <AddIcon />{' '}
                    </button>
                    {/* <div className='faq__list-item-dropdown'>
                        <p className='faq__list-item-dropdown-top'>
                            Watch anywhere, anytime, on an unlimited number of
                            devices. Sign in with your Netflix account to watch
                            instantly on the web at netflix.com from your
                            personal computer or on any internet-connected
                            device that offers the Netflix app, including Smart
                            TVs, smartphones, tablets, streaming media players
                            and game consoles.
                        </p>
                        <p className='faq__list-item-dropdown-bottom'>
                            You can also download your favorite shows with the
                            iOS, Android, or Windows 10 app. Use downloads to
                            watch while you're on the go and without an internet
                            connection. Take Netflix with you anywhere.
                        </p>
                    </div> */}
                </li>
                <li className='faq__list-item'>
                    <button>
                        How do I cancel? <AddIcon />{' '}
                    </button>
                    {/* <div className='faq__list-item-dropdown'>
                        <p className='faq__list-item-dropdown-top'>
                            Netflix is flexible. There are no pesky contracts
                            and no commitments. You can easily cancel your
                            account online in two clicks. There are no
                            cancellation fees - start or stop your account
                            anytime.
                        </p>
                    </div> */}
                </li>
                <li className='faq__list-item'>
                    <button>
                        What can I watch on Netflix? <AddIcon />{' '}
                    </button>
                    {/* <div className='faq__list-item-dropdown'>
                        <p className='faq__list-item-dropdown-top'>
                            Netflix has an extensive library of feature films,
                            documentaries, TV shows, anime, award-winning
                            Netflix originals, and more. Watch as much as you
                            want, anytime you want.
                        </p>
                    </div> */}
                </li>
                <li className='faq__list-item'>
                    <button onClick={clicked}>
                        Is Netflix good for kids? <AddIcon />{' '}
                    </button>
                    <div className={`faq__list-item-dropdown-${status}`}>
                        <p className='faq__list-item-dropdown-top'>
                            The Netflix Kids experience is included in your
                            membership to give parents control while kids enjoy
                            family-friendly TV shows and movies in their own
                            space.
                        </p>
                        <p className='faq__list-item-dropdown-bottom'>
                            Kids profiles come PIN-protected parental controls
                            that let you restrict the maturity rating of content
                            kids can watch and block specific titles you don't
                            want kids to see.
                        </p>
                    </div>
                </li>
            </ul>

            <Form_landing className='faq__form' />
        </div>
    );
}

export default FAQ;
