describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server when input is empty', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toBe(0);
  });

it('should update #servertable upon invoking updateServerTable', function () {
  submitServerInfo();
  updateServerTable();

  let allCurrentTd = document.querySelectorAll('#serverTable tbody tr td');

  expect(allCurrentTd.length).toEqual(2);
  expect(allCurrentTd[0].innerText).toEqual('Alice');
  expect(allCurrentTd[1].innerText).toEqual('$0.00');
  

})




  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';

  });
});
