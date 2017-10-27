### How to installation plugin
Download and install ```webcard``` plugin [Mac](/plugins/webcard.dmg) and [Windows](/plugins/webcard.msi)

### Support
- Safari 11
- IE 9+
- Firefox 51 (Not support newer version)
- Chrome 44 (Not support newer version)


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### How to use
```javascript
<SmartCard onChange={this.handleSmartCardChange} />
```
### Example data
```json
{
  "citizenId": "1234567890123",
  "titleTH": "นาย",
  "firstnameTH": "ใจดี",
  "lastnameTH": "ดีใจ",
  "titleEN": "Mr.",
  "firstnameEN": "Jaidee",
  "lastnameEN": "Deejai",
  "birthday": "25600131",
  "gender": "1",
  "address": [
    "30/1",
    "หมู่ที่",
    "12",
    "ตำบลท้ายเมือง",
    "อำเภอท้ายบ้าน",
    "จังหวัดกระบี่กระบอง"
  ],
  "issueAll": "25570117",
  "expire": "25651231"
}
```