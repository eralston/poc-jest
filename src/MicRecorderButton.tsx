
import React, { useState, useRef, useCallback } from 'react';
import MicRecorder from 'mic-recorder';

export default function MicRecorderButton(): JSX.Element {

    const [isRecording, setIsRecording] = useState(false);
    const recorderRef = useRef<MicRecorder | null>(null);
    const onClick = useCallback(() => {
        if (isRecording) {
            const recorder = recorderRef.current;
            if (recorder == null) {
                throw new Error('Recorder is null while isRecording.');
            }
            // Once you are done singing your best song, stop and get the mp3.
            recorder
                .stop()
                .getAudio()
                .then(([buffer, blob]) => {
                    // do what ever you want with buffer and blob
                    // Example: Create a mp3 file and play
                    const file = new File(buffer, 'me-at-thevoice.mp3', {
                        type: blob.type,
                        lastModified: Date.now()
                    });
                    var url = URL.createObjectURL(file);
                    // const player = new Audio(url);
                    // player.play();
                    // open the file in a new window instead of playing it
                    window.open(url, '_blank');
                    
                    setIsRecording(false);
                    recorderRef.current = null;

                }).catch((e) => {
                    alert('We could not retrieve your message');
                    console.log(e);
                });

        } else {
            const recorder = recorderRef.current = new MicRecorder({
                bitRate: 128,
                encoder: 'mp3', // default is mp3, can be wav as well
                sampleRate: 44100, // default is 44100, it can also be set to 16000 and 8000.
            });
            setIsRecording(true);

            recorder.start().then(() => {
                // something else
                console.log('recorder started')
            }).catch((e) => {
                console.error(e);
            });
        }
    }, [isRecording]);

    return (
        <button onClick={onClick}>
            {isRecording ? 'stop' : 'record'}
        </button>
    );
}