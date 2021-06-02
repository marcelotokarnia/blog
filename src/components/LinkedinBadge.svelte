<script lang="ts">
  export let className: string = ''
  const profileUrl: string = 'https://www.linkedin.com/in/marcelo-tokarnia-5a1ab2128/'
</script>

<div class={`LI-profile-badge ${className}`}>
  <div>
    <div dir="ltr" class="border-element LI-badge-container horizontal light large">
      <div class="LI-profile-badge-header LI-name-container LI-row">
        <div class="LI-col LI-header">
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">
            <div class="LI-title">Senior Software Engineer</div>
          </a>
        </div>
      </div>
      <ul class="LI-more-info">
        <li class="LI-field">
          <a
            href="https://www.linkedin.com/company/olaisaac"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://res.cloudinary.com/marcelotokarnia/image/upload/v1618658830/blog/isaac_nnm7wj.jpg`}
              class="LI-field-icon"
              alt="Klarna"
            />
            Working at Isaac since 2020
          </a>
        </li>
        <li class="LI-field">
          <a
            href="https://www.linkedin.com/edu/instituto-tecnol%C3%B3gico-de-aeron%C3%A1utica---ita-21195?trk=profile-badge-school"
          >
            <img
              src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1618659119/blog/ita_ytso2m.png"
              class="LI-field-icon"
              alt="Instituto Tecnológico de Aeronáutica - ITA"
            />
            Graduated at ITA in 2013
          </a>
        </li>
      </ul>
      <div class="LI-footer LI-row">
        <a href={profileUrl} class="LI-view-profile">See Past Experiences</a>
        <span class="LI-logo">
          <a href={profileUrl}>
            <img
              src="https://static-exp1.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_flat_white_93x21.png"
              alt="LinkedIn"
              class="LI-icon"
            />
          </a>
        </span>
      </div>
    </div>
  </div>
</div>

<style>
  .LI-badge-container.horizontal.light {
    /*! normalize.css v2.1.2 | MIT License | git.io/normalize */
    @font-face {
      font-family: 'LinkedIn-Glyphs';
      src: url('/sc/h/3jf6laxboeghfyz73f4jtjnbp');
      src: url('/sc/h/3jf6laxboeghfyz73f4jtjnbp?#iefix') format('embedded-opentype'),
        url('/sc/h/b3ma2g3y7wk4n2zryxzn3l8ok') format('woff'),
        url('/sc/h/e5vznv0p41shxhhwvzkoe3cyv') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'LinkedIn-Glyphs-2.0.2';
      src: url('/sc/h/3jf6laxboeghfyz73f4jtjnbp');
      src: url('/sc/h/3jf6laxboeghfyz73f4jtjnbp?#iefix') format('embedded-opentype'),
        url('/sc/h/b3ma2g3y7wk4n2zryxzn3l8ok') format('woff'),
        url('/sc/h/e5vznv0p41shxhhwvzkoe3cyv') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @-webkit-keyframes archetype-loader {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-moz-keyframes archetype-loader {
      from {
        -moz-transform: rotate(0deg);
      }
      to {
        -moz-transform: rotate(360deg);
      }
    }
    @-o-keyframes archetype-loader {
      from {
        -o-transform: rotate(0deg);
      }
      to {
        -o-transform: rotate(360deg);
      }
    }
    @keyframes archetype-loader {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes archetype-loader-position-medium-1 {
      from,
      to {
        background-position: 0 -288px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @-moz-keyframes archetype-loader-position-medium-1 {
      from,
      to {
        background-position: 0 -288px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @-o-keyframes archetype-loader-position-medium-1 {
      from,
      to {
        background-position: 0 -288px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @keyframes archetype-loader-position-medium-1 {
      from,
      to {
        background-position: 0 -288px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @-webkit-keyframes archetype-loader-position-medium-2 {
      from,
      to {
        background-position: 0 -230px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @-moz-keyframes archetype-loader-position-medium-2 {
      from,
      to {
        background-position: 0 -230px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @-o-keyframes archetype-loader-position-medium-2 {
      from,
      to {
        background-position: 0 -230px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @keyframes archetype-loader-position-medium-2 {
      from,
      to {
        background-position: 0 -230px;
        width: 58px;
        height: 58px;
        margin-left: -29px;
        margin-top: -29px;
      }
    }
    @-webkit-keyframes archetype-loader-position-small-1 {
      from,
      to {
        background-position: 0 -362px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @-moz-keyframes archetype-loader-position-small-1 {
      from,
      to {
        background-position: 0 -362px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @-o-keyframes archetype-loader-position-small-1 {
      from,
      to {
        background-position: 0 -362px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @keyframes archetype-loader-position-small-1 {
      from,
      to {
        background-position: 0 -362px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @-webkit-keyframes archetype-loader-position-small-2 {
      from,
      to {
        background-position: 0 -346px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @-moz-keyframes archetype-loader-position-small-2 {
      from,
      to {
        background-position: 0 -346px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @-o-keyframes archetype-loader-position-small-2 {
      from,
      to {
        background-position: 0 -346px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @keyframes archetype-loader-position-small-2 {
      from,
      to {
        background-position: 0 -346px;
        width: 16px;
        height: 16px;
        margin-left: -8px;
        margin-top: -8px;
      }
    }
    @-webkit-keyframes archetype-loader-position-large-1 {
      from,
      to {
        background-position: 0 -115px;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
    @-moz-keyframes archetype-loader-position-large-1 {
      from,
      to {
        background-position: 0 -115px;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
    @-o-keyframes archetype-loader-position-large-1 {
      from,
      to {
        background-position: 0 -115px;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
    @keyframes archetype-loader-position-large-1 {
      from,
      to {
        background-position: 0 -115px;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
    @-webkit-keyframes archetype-loader-position-large-2 {
      from,
      to {
        background-position: 0 0;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
    @-moz-keyframes archetype-loader-position-large-2 {
      from,
      to {
        background-position: 0 0;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
    @-o-keyframes archetype-loader-position-large-2 {
      from,
      to {
        background-position: 0 0;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
    @keyframes archetype-loader-position-large-2 {
      from,
      to {
        background-position: 0 0;
        width: 115px;
        height: 115px;
        margin-left: -57.5px;
        margin-top: -57.5px;
      }
    }
  }
  .LI-badge-container.horizontal.light div,
  .LI-badge-container.horizontal.light span,
  .LI-badge-container.horizontal.light a,
  .LI-badge-container.horizontal.light img,
  .LI-badge-container.horizontal.light ul,
  .LI-badge-container.horizontal.light li {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  .LI-badge-container.horizontal.light ul {
    list-style: none;
  }
  .LI-badge-container.horizontal.light a img {
    border: none;
  }
  .LI-badge-container.horizontal.light a:focus {
    outline: thin dotted;
  }
  .LI-badge-container.horizontal.light a:active,
  .LI-badge-container.horizontal.light a:hover {
    outline: 0;
  }
  .LI-badge-container.horizontal.light img {
    border: 0;
  }
  .LI-badge-container.horizontal.light a {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light a:hover,
  .LI-badge-container.horizontal.light a:focus {
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light a:visited {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light a:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light a:visited:hover,
  .LI-badge-container.horizontal.light a:visited:focus {
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light a:visited:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light div.alert img {
    display: none;
  }
  .LI-badge-container.horizontal.light div.alert a {
    color: #fff;
    font-weight: bold;
  }
  .LI-badge-container.horizontal.light div.alert a:hover,
  .LI-badge-container.horizontal.light div.alert a:focus {
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light div.alert a:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light div.alert a:visited:hover,
  .LI-badge-container.horizontal.light div.alert a:visited:focus {
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light div.alert a:visited:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light div.alert:hover a {
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light div.alert ul {
    margin: 0 21px 5px 7px;
  }
  .LI-badge-container.horizontal.light {
    border-radius: 2px;
    display: inline-block !important;
    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.24);
    word-wrap: break-word;
    word-break: break-word;
  }
  .LI-badge-container.horizontal.light {
    font-family: sans-serif;
  }
  .LI-badge-container.horizontal.light .LI-view-profile {
    max-width: 240px;
    white-space: inherit;
    height: auto;
  }
  .LI-badge-container.horizontal.light div,
  .LI-badge-container.horizontal.light span,
  .LI-badge-container.horizontal.light a,
  .LI-badge-container.horizontal.light img,
  .LI-badge-container.horizontal.light ul,
  .LI-badge-container.horizontal.light li {
    line-height: normal;
    letter-spacing: normal;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .LI-badge-container.horizontal.light .LI-name-container {
    margin: 25px 20px 0px 25px;
    display: flex;
  }
  .LI-badge-container.horizontal.light .LI-field {
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 17px;
    color: white;
    font-weight: normal;
  }
  .LI-badge-container.horizontal.light .LI-field a {
    font-size: 13px;
    line-height: 17px;
    color: white;
    font-weight: normal;
    vertical-align: middle;
  }
  .LI-badge-container.horizontal.light .LI-field a:hover,
  .LI-badge-container.horizontal.light .LI-field a:focus {
    opacity: 0.8;
    cursor: pointer;
  }
  .ie .LI-badge-container.horizontal.light .LI-field a:hover,
  .ie .LI-badge-container.horizontal.light .LI-field a:focus {
    opacity: 0.8;
    cursor: hand;
  }
  .LI-badge-container.horizontal.light .LI-field a:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light .LI-field a:visited:hover,
  .LI-badge-container.horizontal.light .LI-field a:visited:focus {
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light .LI-field a:visited:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light .LI-title {
    display: block;
    font-size: 14px;
    font-weight: normal;
    line-height: 16px;
    color: white;
  }
  .LI-badge-container.horizontal.light .LI-name a {
    font-size: 18px;
    line-height: 22px;
    color: white;
    font-weight: bold;
  }
  .LI-badge-container.horizontal.light .LI-name a:hover,
  .LI-badge-container.horizontal.light .LI-name a:focus {
    opacity: 0.8;
    cursor: pointer;
  }
  .ie .LI-badge-container.horizontal.light .LI-name a:hover,
  .ie .LI-badge-container.horizontal.light .LI-name a:focus {
    opacity: 0.8;
    cursor: hand;
  }
  .LI-badge-container.horizontal.light .LI-name a:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light .LI-name a:visited:hover,
  .LI-badge-container.horizontal.light .LI-name a:visited:focus {
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light .LI-name a:visited:active {
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light .LI-row:after {
    content: '\0020';
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
  }
  .LI-badge-container.horizontal.light .LI-col {
    float: left;
  }
  .LI-badge-container.horizontal.light .LI-header {
    width: 70%;
  }
  .LI-badge-container.horizontal.light .LI-logo {
    position: absolute;
    bottom: 0;
    right: 5px;
  }
  .LI-badge-container.horizontal.light .LI-icon {
    padding-top: 6px;
    width: 85px;
    max-height: 20px;
  }
  .LI-badge-container.horizontal.light .LI-footer {
    margin: 0px 15px 20px 25px;
    position: relative;
  }
  .LI-badge-container.horizontal.light .LI-field-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .LI-badge-container.horizontal.light .LI-view-profile {
    font-weight: bold;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    margin: 0;
    overflow: visible;
    text-align: center;
    width: auto;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
    padding: 0 13px;
    height: 31px;
    line-height: 31px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 13px;
    color: #008cc9;
    background-color: transparent;
    border-color: #008cc9;
    white-space: nowrap;
    display: -moz-inline-stack;
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    zoom: 1;
    *display: inline;
    vertical-align: middle;
  }
  .LI-badge-container.horizontal.light .LI-view-profile:hover,
  .LI-badge-container.horizontal.light .LI-view-profile:focus {
    -webkit-box-shadow: inset 1px 1px #0077b5, inset -1px -1px #0077b5;
    -moz-box-shadow: inset 1px 1px #0077b5, inset -1px -1px #0077b5;
    box-shadow: inset 1px 1px #0077b5, inset -1px -1px #0077b5;
    border-color: #1fa1f2;
    opacity: 0.8;
  }
  .LI-badge-container.horizontal.light .LI-view-profile:active {
    -webkit-box-shadow: inset 1px 1px #0077b5, inset -1px -1px #0077b5;
    -moz-box-shadow: inset 1px 1px #0077b5, inset -1px -1px #0077b5;
    box-shadow: inset 1px 1px #0077b5, inset -1px -1px #0077b5;
    border-color: #1fa1f2;
    color: #1fa1f2;
  }
  .LI-badge-container.horizontal.light {
    width: 330px;
  }
  .LI-badge-container.horizontal.light .LI-title {
    padding-top: 5px;
  }
  .LI-badge-container.horizontal.light .LI-more-info {
    padding: 10px 20px 5px 25px;
  }
  @media only screen and (max-width: 475px) {
    .LI-badge-container.horizontal.light {
      width: 280px;
    }
    .LI-badge-container.horizontal.light .LI-name-container {
      margin: 15px 15px 0px 15px;
      display: flex;
    }
    .LI-badge-container.horizontal.light .LI-name a {
      font-size: 16px;
      line-height: 20px;
    }
    .LI-badge-container.horizontal.light .LI-title {
      padding-top: 5px;
      font-size: 13px;
    }
    .LI-badge-container.horizontal.light .LI-more-info {
      padding: 10px 15px 10px 15px;
    }
    .LI-badge-container.horizontal.light .LI-field {
      margin-bottom: 10px;
      font-size: 13px;
    }
    .LI-badge-container.horizontal.light .LI-field-icon {
      width: 16px;
      height: 16px;
    }
    .LI-badge-container.horizontal.light .LI-header {
      width: 65%;
    }
    .LI-badge-container.horizontal.light .LI-footer {
      margin: 0px 15px 20px 15px;
    }
  }
</style>
