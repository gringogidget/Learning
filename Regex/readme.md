1) If you want to select a chunk of text from one portion to another, eg:

`<a href="/apple/ios-11.1/smiling-face-with-open-mouth-and-cold-sweat/">
<img src="https://emojipedia-us.s3.amazonaws.com/thumbs/72/apple/114/smiling-face-with-open-mouth-and-cold-sweat_1f605.png" srcset="https://emojipedia-us.s3.amazonaws.com/thumbs/144/apple/114/smiling-face-with-open-mouth-and-cold-sweat_1f605.png 2x" alt="Smiling Face With Open Mouth &amp; Cold Sweat" title="Smiling Face With Open Mouth &amp; Cold Sweat" width="72" height="72">`

`<a href="[^"]*">` will select `<a href="` and everything in-between it up until `">"`
