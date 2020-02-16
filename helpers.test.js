describe('Testing on all functions in helpers.js', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should sum total tip amount of all payments on sumPaymentTotal', function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
        
    });

    it('should sum total tip amount of all payments on sumPaymentTotal', function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
        
    });

    it('should calculate the tip percent upon invoking calculateTipPercent', function () {
        expect(calculateTipPercent(111, 111)).toEqual(100);
        expect(calculateTipPercent(100, 20)).toEqual(20);
    });

    it('should create a new td and append to tr on invoking appendTd(tr, value)', function () {

    let tr1 = document.createElement('tr');

    appendTd(tr1, 'hello');

    expect(tr1.children.length).toEqual(1);
    expect(tr1.firstElementChild.innerText).toEqual('hello');
});

    it('should create a new td and append to tr on invoking appendDeleteBtn(tr)', function () {
        let tr2 = document.createElement('tr');

        appendDeleteBtn(tr2);
        expect(tr2.children.length).toEqual(1);
        expect(tr2.firstElementChild.innerText).toEqual('Del');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = ''
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;


    });











});