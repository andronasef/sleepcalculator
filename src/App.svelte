<script>
  import dayjs from 'dayjs'

  let cycles = Array.from({ length: 6 }, (_, i) => i + 1).reverse()

  var now = dayjs()
</script>

<main class="main">
  <div class="container">
    <center>
      <img src="/logo.svg" alt="" class="logo" />
    </center>
    <p>
      The average human takes 15 minutes to fall asleep. <br /> If you go to sleep
      right now, you should try to wake up at one of the following times:
    </p>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      {#each cycles as cycle}
        <div class="sleeptime {cycle >= 5 ? 'twospan' : 'onespan'}">
          {now.add(90 * cycle + 15, 'minutes').format('h:mm A')}
          <span
            class=" suggetion
          {cycle >= 5 ? 'flex' : 'hidden'}"
          >
            Suggested
          </span>
        </div>
      {/each}
    </div>
    <p>
      If you wake up at one of these times, you’ll rise in between 90-minute
      sleep cycles. A good night’s sleep consists of 5-6 complete sleep cycles.
    </p>
    <p class="footer">
      This is replicate of
      <a href="https://sleepcalculator.com/">Sleep Calculator </a>
      created by
      <a href="https://andronasef.github.io">@andronasef</a>
    </p>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap');

  .main {
    @apply grid justify-center items-center text-white min-h-screen bg-[#050c2d];
    font-family: 'Nunito', sans-serif;
  }
  .container {
    @apply px-5 space-y-4 md:px-20 text-center md:max-w-3xl;
  }
  .logo {
    @apply md:mb-10 md:scale-[1.5];
  }
  .sleeptime {
    @apply font-bold text-lg relative flex flex-col md:flex-row justify-between items-center p-2 md:p-3 rounded bg-[#202646] col-span-1;
  }
  .twospan {
    @apply md:col-span-2;
  }
  .onespan {
    @apply md:col-span-1 justify-around;
  }
  .suggetion {
    @apply text-[#FFDD88] font-light text-sm uppercase;
  }
  a {
    @apply underline;
  }
  p {
    @apply text-lg md:text-xl;
  }
  .footer {
    @apply text-base;
  }
</style>
