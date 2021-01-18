const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});


export async function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  })
}

