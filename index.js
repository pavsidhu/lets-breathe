const Alexa = require('alexa-sdk')

const breathSpeech = `
  Breathe in
  <break time='350ms'/>
  2
  <break time='350ms'/>
  3
  <break time='350ms'/>
  4
  <break time='350ms'/>
  5
  <break time='350ms'/>
  6
  <break time='350ms'/>
  and out
  <break time='350ms'/>
  2
  <break time='350ms'/>
  3
  <break time='350ms'/>
  4
  <break time='350ms'/>
  5
  <break time='350ms'/>
  6
  <break time='350ms'/>
`

const speech = `
  Hey, before we begin your <phoneme alphabet="ipa" ph="ˈˈmɪnɪt">minute</phoneme>
  long deep breathing session, I'll give you a moment to make sure you're
  sitting comfortably with your back straight
  <break time='5s'/>.
  Okay let's start, Remember to breathe <emphasis level="moderate">in</emphasis>
  through the nose and <emphasis level="moderate">out</emphasis> through the
  mouth.
  <break time='500ms'/>

  ${breathSpeech}
  ${breathSpeech}
  ${breathSpeech}
  ${breathSpeech}
  ${breathSpeech}

  You've now completed your session.
  I hope you have a <emphasis level="moderate">great</emphasis> day.
`

const handlers = {
  StartSession: function() {
    this.emit(':tell', speech)
  },

  LaunchRequest: function() {
    this.emit('StartSession')
  }
}

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context, callback)
  alexa.registerHandlers(handlers)
  alexa.execute()
}
