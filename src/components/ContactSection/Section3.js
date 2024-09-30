import React from 'react'
import "./Section3.css"

export default function Section3() {
  return (
    <div>
        <div className='form-container'>
            <div className='form-content'>
                <h2 className='head'>Let us discuss your marketing strategy!</h2>
                <p>Org.nr:903367-1871</p>
                <p>Lumar Holdin LDA</p>
                <p>info@Lunarstrategy.com</p>
                <p>+234-56787899</p>
                <div className='icons'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABD0lEQVRIS2NkoDFgpLH5DIPLgvfzAwTY2Vnq/zMwOAB9rsDA8P8DIwPjBq6oNYW4QoJoH4AMZ2NnuQ80SADVMMYN3FGrAym24NuykH6gywswDaKSBV+Xha4HBkkAyAKgtw/8/PknUDBxwwdCiYToIPq6LBgYPIzAcAdbMAFfuCNbSpYFwKAq5IlaM4GQ66GOwa3s8+IQB0amfxBXMzLWw3zAwPh/wf9//w9CdDJf4IlefYGsSP66PHg+w3/GBHwuJRRceIOIGAuAER/IHbV2A1k++LIspADognioZgOEIf8fAIMLnIL+/WUo5I1dc4AsC5A1IaciqkXyqAUE88FoEA2uICKmYMOmhujSdNBaAADfL3sZyIpySAAAAABJRU5ErkJggg=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAByklEQVRIS92VW07CUBCG57RVE4EEdsASWAKsgBrLgyU+sANYAXQF4AokMeCDReoKxB2wA90BTYAYlHacQSGld0l44Tyey//PfDOdCjjyEkfWhxMzmN2r+ULDspOwzR+0sixDGwFKAGKCgG9Z3ezx+7NzSf3+cq2tzh6i5bA2RgQjW3+aRpkshlqTHnWD5/hBZnkX4S5XNzvb850Bu59fKDM6oAywkdFHll/k78477ecjArBJcOo4YORuzQnf8WWgscHmMR30Vqu14UXGaCQZXmMQBoILIKLo1X0BYTFjdGAqyUjmYhxpILCfuRk1vOc7g89HtbheK0WKkPlS8f6/OOtL3WyFGuzXIJJxrCt1VYu7KdSAN7mLgojSZ+I6UNkWN9BFvMGYXFSY8SGI7IxuFvzhBEbFYlArSQK7lG45feyUdwieQJvyRopWDPhSlBMqbiUsoNBhNx9oHUlAO2UGNrG/8rMPrYFXkFGJjYn/u9i3pdFgeEdDYg24XRVFKdEwqxLXZtxXi+i2svXnflymO0SeiLm4UbNmo8XMXRQkHj0UIxEth9cqKVQFiuLvOOaFNGOETTheBAgrjXBiDVIWOPHaif0yE/M94MIP6+euGYKxBCgAAAAASUVORK5CYII="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABQUlEQVRIS2NkoDFgpLH5DPS14Ouy0PUMDP8DKPEV0MUHuKLWOMLMQPHB12Uh/ykxHKaXO2oN3FycFoBc8p/x/wOG/4wJpFpKhAWMG7ijVgeCDP66PHg+qZYQtoDx/wLuyLWJtLMAaDIwiCaALABGCiiIBEgJJsI+YGD4ALTgAtQCA5AFoDiB8P8rAK0H8S9A4wgkD8JwQIQFmHHw6+cfQcHEDR++LgsO+P+f6QFP9GqwA0Dg27KQfqBPC0hIRbgtwBVUwCT+HhaUFPkA6uL9QBc7AAMskDtq7QZUMQYGiiz4sjTUgJHx/3mIT7AnZ4osAMUB0GBgkTJqAVpRgZxMqRBEwEKOEZKxgDkLmFoYFRiAxQc41P8zKkBSEFgSUx1QlIhIxpXaiRPHZwEo+aFke+KMRFaFSLpgH5NuAGk6hr4FAPDXFSgRT2tKAAAAAElFTkSuQmCC"/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACgklEQVRIS8VVTW7aUBCeMZCoJaiwzI6uug0XqOAENcUsAmoLJ2iy7qLpCWhPAFGEswgpPkGK1AOUrtJduAGogVQJxNN5th96fhjqDaolJHieN9/8fN8HwpYf3HJ++D8A0271gIBMA+EVd5hXuswq3yf+dxwg0Ahx8eXJoTPSJ7LSwdS2jvjwYxDIF3AE6AbJtOtkMCCJAg7EGyK3uVf/2lGjQgB/zs28S8kfHDAycFGOqihqZ6JjA6lFAEUiLOzVL4YyLgRw27VOeCzvOaikBm0iwp1dveJxXj/cLz7s7CbH3LGTrl2UIwFmdrUvWk7XegU96e2ZVQQDit65C4PMm97g91n1RSJBv7jK709rvZczu3LDAFm+n1sDwAEIg/ThZVMG+GNLtRjY1ECHXHUpmcD9zNv+tXg3O6+0gbDBAMvJhEY0s60xIDkqQNCVyYGfXcLThDGfPFJS/G7xZ8CVlySwBGDgXK7peMRYAeCDDl869iqyK1w19kVyeSaTBWxrqcyJA0BqMpmEGfVcZ9S4bWbFUl2CT5l670Qd0aYOQgB3tiWod7QJQC0oTgehHcgRqVXqI+Lll9O1SyduBxFLtoTw2DrgeH6/8FSa2jFMRIOZBSPBJLnQeCxib1GFEqib9eHbgfIMdbX/E4Bn/o0rFUJZEdq0+7pBYOQTCM9ccn/OH1xHVr6kqS+0iXo/RNNgqQ2urBDXh8KCTLJQqaPqKMrsboSA2H6bcUF8yqbaQu3uI5SEjURahTgUo+AFcrCnQ0dYNRJG2jUhZdkaxG7ygWqXIl0L4IN49vtO2G/EcrVdA1sz/2eAeyrpqgbE+ssUI9Czyt/6ovW4WADrksc53zrAX+VjcigzpqNiAAAAAElFTkSuQmCC"/>
                </div>
                <button className='bnt3'>Book a free consultation</button>
            </div>
            <div className='form-section'>
                <p>Or you can aslo contact us here</p>
                <form>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='subject'/>
                    <textarea type='textarea' placeholder='Massage' rows="7" cols="36"/>
                    <button className='btn4'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
