<template lang="md">
    # > I'm Thomas (Tian Hao) Wang

    I am a full-stack software engineer who has worked in all sorts of industries: from high-integrity fields to the creative. Feel free to send me an invite on [LinkedIn][linked-in]!

    I've worked intensely to lead and promote DevOps practices in the teams I've worked with for the purpose of continuous improvement and automation.

    I've contributed (see my [GitHub][github]) to open source through hackathons, personal projects, and bringing creative ideas from concept, to design, to implementation.

    Outside of software, I'm a musician. I love progressive rock, jazz fusion, hip-hop, folk rock, and eletronic music. Feel free to check out my stuff on [SoundCloud][soundcloud]!

    [linked-in]: https://linkedin.com/in/tianhao-wang
    [github]: https://github.com/paced
    [soundcloud]: https://soundcloud.com/papapastry
</template>

<script>
export default {
  mounted() {
    var links = document.links;

    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
      if (links[i].hostname != window.location.hostname) {
        links[i].target = "_blank";
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

section {
  padding: 5vh 10vw;
  font-family: "Raleway", sans-serif;
}

h1 {
  font-size: 36px;
  padding: 2.25em 0.5em 0.95em 0.5em;
}

blockquote {
  background: #ffffff;
  border-left: 5px solid #000000;
  padding-left: 2em;
  quotes: "\201C""\201D""\2018""\2019";
}

a {
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 4px;
  transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;
  color: #ff4800;
}

p {
  display: block;
  font-size: 24px;
  max-width: 26em;
  line-height: 1.6;
  padding: 0.38em;
}

a:hover,
a:focus {
  text-decoration: none;
  background-size: 100% 4px;
}
</style>
