<template>
  <div class="container">
    <div class="has-text-centered">
      <img src="~/assets/images/hexagons.png"
           class="image"
           alt="paced.me hexagon logo.">
      <h1 class="title">
        Tian Hao <b>Thomas</b> Wang
      </h1>
      <h2 class="subtitle">Creative Software Engineering</h2>
    </div>
    <div class="break"></div>
    <div class="columns is-gapless is-desktop" itemscope itemtype="http://schema.org/Person">
      <div
        class="column is-one-quarter-desktop is-full-tablet"
        v-for="detail in details"
        v-bind:key="detail.title"
      >
        <div class="card">
          <div class="card-content">
            <p class="title">{{ detail.title }}</p>
            <p class="subtitle">
              <span v-html="detail.subtitle"></span>
            </p>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item" v-for="link in detail.links" v-bind:key="link.text">
              <span>
                <a :href="link.href" target="__blank" :title="link.title">
                  <div class="tags has-addons">
                    <span class="tag is-dark"><font-awesome-icon :icon="['fab', link.icon]" /></span>
                    <span class="tag">{{ link.text }}</span>
                  </div>
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [
        {
          title: "Software",
          subtitle:
            "<span itemprop='name'>Tian Hao</span> (<span itemprop='additionalName'>Thomas</span>) has worked in <b>high-integrity</b> and <b>creative</b> fields as a professional <span itemprop='jobTitle'>Software Engineer</span>. In teams, Tian Hao develops practical, beautiful applications for <b>web</b>, <b>mobile</b>, and <b>desktop</b> platforms.",
          links: [
            {
              href: "https://www.linkedin.com/in/tianhao-wang",
              text: "LinkedIn",
              icon: "linkedin",
              title: "Tian Hao's Digital LinkedIn Resume"
            }
          ]
        },
        {
          title: "DevOps",
          subtitle:
            "Processes and Tools are <b>how we build</b> software and should be elegant. In the professional space, Tian Hao has worked with process and tools <b>continuous improvement</b> and <b>automation</b>.",
          links: []
        },
        {
          title: "FOSS",
          subtitle:
            "Tian Hao has contributed to the <b>free and open source software</b> (FOSS) community as part of hackathons, personal projects, and bringing creative ideas from <b>concept</b>, to <b>design</b>, to <b>implementation</b>.",
          links: [
            {
              href: "https://gitlab.com/papapastry",
              text: "GitLab",
              icon: "gitlab",
              title: "Tian Hao's GitLab Software Repositories"
            },
            {
              href: "https://github.com/paced",
              text: "GitHub",
              icon: "github",
              title: "Tian Hao's GitHub Software Repositories"
            }
          ]
        },
        {
          title: "Music",
          subtitle:
            "One of Tian Hao's main side passions is the <b>composition</b> and <b>performance</b> of music. He writes prog, folk, ambient, and electronic music. He plays and records music for a laugh on his <b>SoundCloud</b>.",
          links: [
            {
              href: "https://soundcloud.com/papapastry",
              text: "SoundCloud",
              icon: "soundcloud",
              title: "Tian Hao's Music"
            }
          ]
        }
      ]
    };
  }
};
</script>
