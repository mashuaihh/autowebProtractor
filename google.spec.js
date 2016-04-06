/**
 *
 * Created by shia on 4/5/16.
 */
var EC = protractor.ExpectedConditions;
var fs = require('fs');

describe('angularjs homepage todo list', function() {
    browser.ignoreSynchronization = true;
    it('should add a todo', function(done) {
        browser.get('http://google.com');

        var settingEle = element(by.xpath('//*[@id="fsettl"]'));
        expect(settingEle.getText()).toBe("设置");
        settingEle.click();

        var advancedSettingEle = element(by.xpath('//*[@id="fsett"]/a[1]'));
        expect(advancedSettingEle.getText()).toBe("搜索设置");
        advancedSettingEle.click();
        setTimeout(function () {
            done();
        }, 4000);
    });

    it('should click never radio', function (done) {
        var radioNeverEle = element(by.xpath('//*[@id="instant-radio"]/div[3]/span'));
        radioNeverEle.click();
        setTimeout(function () {
            done();
        }, 4000);
    });

    it('should click 100 button', function (done) {
        var hunderdResult = element(by.xpath('//*[@id="result_slider"]/ol/li[6]'));
        for (var i = 0; i < 5; i++) {
            hunderdResult.click();
        }
        setTimeout(function () {
            done();
        }, 4000);
    });

    it('should click save button', function (done) {
        var  saveButton = element(by.xpath('//*[@id="form-buttons"]/div[1]'));
        saveButton.click();
        setTimeout(function () {
            done();
        }, 4000);
    });

    it('should click yes in alert', function (done) {
        browser.wait(EC.alertIsPresent(), 5000).then(function () {
            browser.switchTo().alert().accept();
            setTimeout(function () {
                done();
            }, 4000);
        });
    });

    it('should search', function (done) {
        var abbb = element(by.xpath('//*[@id="lst-ib"]'));
        abbb.sendKeys('mashuaihh');
        setTimeout(function () {
            done();
        }, 6000);
    });

    it('should click search', function (done) {
        var searchBtn = $('input[value="Google 搜索"]');
        searchBtn.click();
        setTimeout(function () {
            done();
        }, 4000);
    });

    it('should show results', function (done) {
        var abbb = element(by.css('body'));
        abbb.getText().then(function (txt) {
            //fs.writeFile("/home/shia/codestuff/nodejs/emailcollect/afile.txt", txt, function (err) {
            fs.writeFile("./sampleFile.txt", txt, function (err) {
                if (err) {
                    console.error(err);
                }
                console.log('saved');
                setTimeout(function () {
                    done();
                }, 4000);
            });
        });
    });
});
