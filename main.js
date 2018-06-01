var ext_font = new Array(  "abf", "afm", "bdf", "bmf", "fnt", "fon", "mgf", "otf", "pcf", "postscript font", "pfa", "pfb", "pfm", "afm", "fond", "sfd", "snf", "tdf", "tfm", "ttf (.ttf, .ttc)", "woff" );
var ext_image = new Array("pdf", "ani", "anim", "apng", "art", "bef", "bmp", "bsave", "cal", "cin", "cpc", "cpt", "dpx", "ecw", "exr", "fits", "flic", "fpx", "gif", "hdri", "hevc", "icer", "icns", "ico", "cur", "ics", "ilbm", "jbig", "jbig2", "jng", "jpg", "jpeg", "mng", "miff", "pbm", "pcx", "pgf", "pgm", "pictor", "png", "ppm", "psd", "psb", "psp", "qtvr", "rad", "rgbe", "sgi", "tga", "tiff", "tiff", "ep", "tiff", "it", "logluv", "tiff", "wbmp", "webp", "xbm", "xcf", "xpm ", "ciff", "dng", "orf ", "ai", "cdr", "cgm", "dxf", "eva", "emf", "gerber", "hvif", "iges", "pgml", "svg", "vml", "wmf", "xar ", "cdf", "djvu", "eps", "pdf", "pict", "ps", "xaml");	
var ext_sql = new Array("4db", "4dd", "4dindy", "4dindx", "4dr", "accdb", "accde", "adt", "apr", "box", "chml", "daf", "dat", "dat", "db", "db", "dbf", "egt", "ess", "eap", "fdb", "fdb", "fp, fp3, fp5, and fp7", "frm", "gdb", "gtable", "kexi", "kexic", "kexis", "ldb", "mda", "mdb", "adp", "mde", "mdf", "myd", "myi", "ncf", "nsf", "ntf", "nv2", "odb", "ora", "pdb", "pdi", "pdx", "prc", "sql", "rec", "rel", "rin", "sdb", "sdf", "udl", "wadata", "waindx", "wamodel", "wajournal", "wdb", "wmdb");
var ext_audio = new Array("8svx", "16svx", "aiff", "bwf", "cdda", "raw", "wav", "compressed", "flac", "pac", "m4a", "ape", "optimfrog", "rka", "shn", "tak", "tta", "wma", "brstm", "ast", "aaf", "3gp", "gif", "asf", "avchd", "avi", "cam", "dat", "dsh", "flv", "m1v", "mpeg-1", "m2v",  "mpeg-2", "fla", "flr", "sol", "m4v", "mkv", "wrap", "mng", "mov", "mpeg", "mp4", "mxf", "roq", "nsv", "ogg", "svi", "smi", "swf", "wmv", "amr", "mp2", "mp3", "spx", "gsm", "wma", "aac", "m4a", "mp4", "m4p", "aac", "mpc", "vqf", "ots", "swa", "vox", "voc", "dwd", "smp");

var icons = [];
	icons['act_add'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHiSURBVDjLpZPNaxNBGMb33/DWoxcPngr+B4pQggdL8WNbaxQbGtugkESE0IZEkiYhpC2GtJQatKW5pFYl2yrKCrZVrMYo2jbHfJElm/1IPJXHmdklbZGURBd+PPO++84zM+/ucAC4/4GzjC2PTKXzuvvZPlxPCcldOBd/4v7Cd9ybz8Exl8V4fAd3H3+GfeYjbLEtuOLvdTqPGXhT+YNopoxusUfeHTADuvK/YA28BTNwJffQbDa75obvtWHgfPILjUYDOkOHrutsLIpiWxqkhvcKpgFpmKqq6J/IttBITAvbPZqm4ZrnlWFAu11XFCh1glI3VTnRgL6/8vCFYUA/Va0mQ5Zlpgy5RrRGcoYeIht5wsCDVcPAkfgKSZJQNaFjqSr9de54KozxmauwhvrAPzoPi3PMMLDPfkKlUjnWAxofPcLzD0vwrAxiLTeNL0UB4fU7uBw+g96RU0FuNLaNUqlEKJtqcNRgKHAB6W8RpH9EWRzcuInwxi1q8JuzRTdRKBQJBRQJhRbFll50n8XLXOJYI1ez09QA9C4s3w6J7M8a9r/BoHcd1ycypMtrrFH97jTO2XoQEIbgE3g22ZfhD3fQyY0jhZOXgqcxJQyzlanSmPWg02tLiv0ElW7bVD/N/wGu4yJFlYuLaQAAAABJRU5ErkJggg==';
	icons['act_delete'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAllJREFUeNqMU0toU1EQPfd9k4qF+mkg0lREUWqEWtQuWqOl2rpQ3HXjTl0IdlHowrVLF4ILCy7EjTs3KgrSoLaJdVGVCDVEix9sJNXGxmhsk5f3u9556bPRCHZguMzMOefN3HmX4S9L9HSMccc9zTkP+DnGmMFk6cahp5nz9ViBAfODZG90wLGs8bbD/Wjt2getpQVelQNmsYh86gU+TT6CrKqDsal0/A+B5MHoAJPk8ejZcwgEdZSnk7CzH2Dn56G0hqFEtqGpOwajUkX6+jVw1xmMPUnHfwtMdO/ke0dGIS/kUH54D65jgcky/Ba440CSVTQdOQEntAUvr1xG3/QsIwEp0bN7LHL0GNRCHuX4bRoYshaApGjCVe+kmPJUJxzhiUcfl1zXPRPq7ILx+D5kVyhWDbDKMlh5adVFTHmqE47wxCMBRUjrSj4Hs1rBhgcz+J8Vj3eC8MTzOoDEwLPvIUkK1mKEIzzxagJiNvbjO+TgujUJEI7wxPNG4IyZtmVpyvpmLJ/qB2ybFtzIJIKigHACD+J5AoumfSdfWhpqC20G03Tv58A/+LRRRhsSIp8XvoJ4K2lEJnqjc/v3dCAQ0Ol2ayINDTAxvwTDqOL5qwz6ptLtApeVRC07WSgNpzKzMEX7qq5D1TSoqgpFOJ1eLPJUJxzhibeyRuDi6+xNOu3UzNXtW9sRDofEZQXBeK1HxzAwn/uCdx/nkPj2c9jH+yP41ix8x60Duy5sUpWT4iI0cB/BzEXLvjv07M0lEbwVXmp4jXUWEb7RW/GqucILftv1z/mXAAMAUKIIFQm47kwAAAAASUVORK5CYII=';
	icons['act_download'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJElEQVR4XqWSS2gTYRSFz0xmYlJ10VSrYOqrWgVXghuTiriVulDxUQRpFkVjpaJ9ENwLWiu4U1yUgFZqG1GR+ipCK8ZiFS1KFYxCXQhJNbTFxkwyM/9xJoEw1IhIv8v5GZh77v3PMBJJOAl2qEkQK1AOCan4RX0lHCiYh23ubumHIQxLeZhCh2FJN3M4Hz39x2Cl7CJJxtjX+8gZWWhGBjk9g+3r9qIcMsoiQZKKsst6sG/yPwNYPEnYBfKvA5T6TjVOgUBptwsaSY8QJkhRUN7MQhf5wrtgu8pSr4wXCgWi/urara37z3kVl9s2eEwaEJIJuAwABpIznyzzboQPnfWAgK7nERuK/pqe/REFSQTblVjkxh7tycceXh4O8dLIEXaNHGDkcYBHb1eycWAxG/srePjWEl4ZPc7ma9s0yzNAEkoxK5qejT+cWLuqrsZfVSdNzr7FVDaBlPYZ8iIJbsgggS2+XUjPpPkhMZ4iESp9xHi3Pgei4eajq5oieaCqKr7nv0D1uOD2yHB7XajxbUS1txZDI4MaBRoKHhuSJQXalOaDXbWZ3ncRtjz189hwJU/EfWx7uYZ9iQj3XVidsXucnsLhVLBDiZ26viPXMxFm+LmPra+WsXfyJM/07czVdxZzOyVjHhRoev1+NDk9NccNSwNYXxFA+ttPjr2JJ4WJ0D9/JDsbTTQMDt3TlmMzqsQm3H1wRxOmI7cDycpELAAZC+Q3le057Whq6NsAAAAASUVORK5CYII=';
	icons['act_edit'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAm1JREFUeNqMU11IFFEU/ubOzM7+CEmUaVgs/pQhRpEZiZEEQdFDxCYkERiRiQ+BlRLFklYgPpTkgz0Y+BMoBUUEZgUWEkY/JPhSWBkVW+pqbi7i1q4zt3NndrZdEOoM5/5/3/nOPXekouZHoUhUT48ZHJxzJJskATI1qsymx/x7M7CU5TU94P+yZx+nufdCf+9SeEVEFnZ/bBJSPKoQYtB4//pMOE/dwa+rPnQe3lp5FP3S56Z9lckEzJbtVGS4VXJFMXuXwsx1kUJEN1CevxI9R0oOeS8N3E5RYA+cBGB0WKgQlEZcWXVpDlY03MMizX+3+jCvGxVLEmgyI/kWgTCDcXydi6DVt8l02yK6hE8tT3lE4ihs2CUlCByybOZvE4j4PxaimCEXqxLtb87woI4NQy2oxtS3IEb8dzlLTsFJKrS4i7FL3Iuiwq254HF7UH+uESdqTqLzQx9CgRAWZ4Jgf1OQSIVk9gknAk3ToHlUzPqzcb6qCDe6b6Fky3Y8ZIMouV5TnEjBrSlWGe0URD7MAUMDxk/noqwiDxg9g8qCY+h4PIi25pZiOvYmQfD8yyxVwXoHhAQn8KJDxuq2dSg76AW+TwHhMEZHenGl/Z0JNk/aEVn82coSlVNW6VbTsOZaDkp92UBgApidRNeLVahbexM22MJZIa3aU2uYJVSx+9UObKuvBZaVUzkCaB9ejqqOt3DE5lKfshLXcGBDVspGV08WMvUF7NmYhq7XGajtfm8BeCyVQI3ND+VfHNgpXpr1MeiKG8eDOiYmX6KQUj+b34fGy0+gEliNhodS/ljyXPJ0/L/9JB+3J38EGABKY+aWBIXgxQAAAABJRU5ErkJggg==';
	icons['act_link'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2NJREFUeNpsk1toXFUUhr9zmSRTO5NOmyaloaRJA+kkCGqiTSNttbSp0gh9MiDiNSCmYPWhmAeh0sbaqiA+pEEoFvIiopSCEolpJBprG3Mx0eg0SWnsZZrMnLllZjJzzpybu8aHCC74WWwW69//Wv/eUtX7g9wPxwXbkRtNSz1jOfIB15WQJfkfKLJz2aOYXbJsTUiSw9pQV5tdTIseT3Gu87XDn3C43oOk/kV4WSGizzB1Y9eBwdGu8axedk5VCkfXkqiiF8t2etSSBzo/fraJp6vy/JFoYU6rJKpDpDBAcPtTVGx6lb5v+zpz+VLWksiO6zQqqqfz1JFm6jcEuFuIEjMSrJBix9b97Cg/xfDsBUo8yxw90oai2p2OqzSCtEpgm+ZHDbU17N6ikrJiJAsOPv8bbKtoJm3PY7gz6OY2Ph2xSOX9HGo6jm0qH97f0SqBJD8RrNxMOAv3smVi7j2sOLdYtsKE00HRvFGM6KNIzfD5xAjBqjEcyfOkKxQ4AmpJsZeMrXIv55AoyKz3TeKygBifzaWDKCL7i2dwpWqS+a0kDUUQgCEqLsIly4JNgc/4PQ43MxA24ljFoJQIFMHU4kuEtOfQXZuca9E3fZ68WOA77jBd1jCqbbtUbrzEleguaid/w9LyTBqnMQsu66sm+anmNIadpXXxG2pXFrAl4bx8i7SrTLiS1KhKZuaXC9+ffezg0iR768ppffNFliIxHOHS6NVrJGZex+urobVhPwfbOsikM6zkcvx89dojY+PjM2ph9sqZsK/sYiBzg0Ntr3DixLuEw3epKN8iblII8BDCUX4cHeMHAS0aIZ5M8V53N79OTTWoiS8/GNiw/eEvdKnQHo9qOLbNdEM7TXMX6e3tRdPi5HWdmwsLDH03wJztPx+wtI5QKCSeuXCh/OxILvr2nuPGW8faC5aNWlTEo/OXiAqykye7yQm5ruug6waxmEZdaWmHJv5H3jBIplIoxx7007K7OZ01rBdUjyewd98+aqqrkYX8/v5+pm9HWYgtJzyFnLcuGKSl5XHqdu5kcWmJ+bk5R02bjvATes71PJPKZL/2DQ3VlKxbRy6bJZ3JaNHwn8/HYrGIt7nlq9t37tRGIxGhRieRSMSvXw+9LPHfqBfwrjmbAqF/8//VZv8WYAChyKaFBqeqUAAAAABJRU5ErkJggg==';
	icons['act_refresh'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI/SURBVDjLjZPbS9NhHMYH+zNidtCSQrqwQtY5y2QtT2QGrTZf13TkoYFlzsWa/tzcoR3cSc2xYUlGJfzAaIRltY0N12H5I+jaOxG8De+evhtdOP1hu3hv3sPzPO/z4SsBIPnfuvG8cbBlWiEVO5OUItA0VS8oxi9EdhXo+6yV3V3UGHRvVXHNfNv6zRfNuBZVoiFcB/3LdnQ8U+Gk+bhPVKB3qUOuf6/muaQR/qwDkZ9BRFdCmMr5EPz6BN7lMYylLGgNNaKqt3K0SKDnQ7us690t3rNsxeyvaUz+8OJpzo/QNzd8WTtcaQ7WlBmPvxhx1V2Pg7oDziIBimwwf3qAGWESkVwQ7owNujk1ztvk+cg4NnAUTT4FrrjqUKHdF9jxBfXr1rgjaSk4OlMcLrnOrJ7latxbL1V2lgvlbG9MtMTrMw1r1PImtfyn1n5q47TlBLf90n5NmalMtUdKZoyQMkLKlIGLjMyYhFpmlz3nGEVmFJlRZNaf7pIaEndM24XIjCOzjX9mm2S2JsqdkMYIqbB1j5C6yWzVk7YRFTsGFu7l+4nveExIA9aMCcOJh6DIoMigyOh+o4UryRWQOtIjaJtoziM1FD0mpE4uZcTc72gBaUyYKEI6khgqINXO3saR7kM8IZUVCRDS0Ucf+xFbCReQhr97MZ51wpWxYnhpCD3zOrT4lTisr+AJqVx0Fiiyr4/vhP4VyyMFIUWNqRrV96vWKXKckBoIqWzXYcoPDrUslDJoopuEVEpIB0sR+AuErIiZ6OqMKAAAAABJRU5ErkJggg==';
	icons['act_rename'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApdJREFUeNqMU01IVFEU/t6bN86MMwOOMIkWSUkbdVOSuQxbuMgSdFyMWGuhrRW0UHHlIjclYdJqEAQJjVqIShFEaaE2YAmZIqOOqcxo4zg/zLx5t3Pu/GBE0YHDgXPu+b77nXuu4unpwUlTFOUGhXL8294YhrFmZDLQ1ubmUNXQUKgIISp8vb3DKSqm2Q0DGSE4L+t+vx++2dku5iL/rjLAu9FRMFrOFYOb0mnpqWQSiVgMx8fHiEajMj7v7x+mc9cI4IKpqKgIkVAI4c1NnK6uZqbLnsbG60sLC5idmoKqqng9PS3Z3WVlWFlZwaflZZxzu5tfzczsw+FwyEPs7spKNHd334mn0+JnPC4OYjExMDgofkQiYiMUEt92d8XXnR3xJRgUgaMjwWc1s9nsLS4uPssMiXAYC+PjZ56Ul0vNUjXJ8Y2M4FRFBa42NQG6Dp1ybDrJ1Wpra8t8Pt/A38Y9NjYGr9eLD/PzsJrN2SSB0Gsho+uK5na7M1arFQ+eqQgENrC9HaSiHaWl5zHx0IlEIgGu2+12mE2mArApC6BqJSUlBkmgVPIPds4n6RU42mw2qNSUBzFR1BnA6XQaXHx630ZpF/ml30AYgOsWi0UCsDGIiYauswRCD/b19XXlG45Sqapb7e13RXarpITFpSW4XK4CQEFCOq1qNIyX/IRsB3T4YzB471F9PXiZGOTx0BAu1tXBIDAjN33k1pAlqPlEOB7H+0BAXouLkxMT6OzowM2WFtzu7MSLycnsvlA171ICN+/Tir5dXc1jyZzH40FbW5tkbm1tlVH+B+akmzAJrbimLa6vw0/MJ8xy4mdKJm5UcpGvbBCIQh45PLRoUe0KnA4L9vY+53/jlqOmZgD/YQSy9UuAAQDK5EM/6vIOCwAAAABJRU5ErkJggg==';
	icons['act_rename_folder'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAlxJREFUeNqMU01oE0EU/mazu25iAjGa9iLFVmoRU39aPUpAFMEe9GiQHnqoimjBkyIIES89KEI9iKCUpIeAomLBkyfNpRp/KvTSirTR9OCh1Nak2SS7s743iamFWjrw7Zud9973/mZEbhjNJYABEruwuTXnAaO6562e0Lb9yNDLm3DdjV19PuRGTt/mrZZ6a4JJGtDg1OBVKxtC2ZAt++iprImJGQf3B6QilBTdI3z6MosPhN4D7fhI8jDJHoIqVdPgSgrGDvz5PAtcGdUgPfi8BsGhWBsGz8UxkfuqJP//1THYVnIGhmEkAoFA2/RP4HIKkX5zEqxt9kXswEhqCjtbDZw5sVudaf9koMdisdZ0Oj38v35lMhkkzibwLvsCLtWuStB1JvCpHkSjUdeyLNx4pCGfn0WhMA8htiIS6cDzOyGUy2WwPuD3QzoOdH8AhekZRUBcvVo4HJZUwrrR+dy2bSWtLSY0Gh87c6OP3ZJDRDKgh0Ih6Sf2h9f85LKN0LOGhAlYbxoGZVDC719L6Ozei5VqVWWhE/t8Mpm8yMZB78f++PFTlzwpmwTFxTzev3mKkLmsSnB5AiSLROy4RCCEGOeuhmQenbWxx/taulGr2k2C0uJ3dEW+qb10LTjkLF0HpUpFZaBGESTnDnus3lmOQBh/PYXB609w8minkvzPOrdxD87PReslbLezaKlm0YhpebJu0Bffo8CrL95VvxOk456wXFhYgV2FpVtLWSyv9iyoCQ2Gbqw7FdYVi0UlLzwLvioKPBB3+9e8xnt0OQ5u5i0LgUm/iat/BBgAe3k3rZvMjxcAAAAASUVORK5CYII=';
	icons['act_view'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVR4Xp3PvWsUURTG4d+dmTsTjbtbGWPQfOAuQgwaERWUrB+FEb9ACyvB2k7RQjAYTCXov2BjpVgEsySuYGECSmIKCdqIClFERasYLGY3M8c9F24liOwzHDgc5n3hmnU3pqeKSXg6F0E/w78JYDAExvArzWqma6Iut8/sp5llqP8pUDYMuT61QNTIcroLMbeefyXQbhOgBAHJUcbgIQJ6HT/cg2ZZPzYt7dJspG9XX5Z/MPvuPB9/zqLKXYeobn9EYH5z/23OwrcAtW9zzsXBnJ7+MpqNcKAjKfChFR7uPYta+jzJsV0FIjLmv6cM7+xDzb/5xKXdFs8XYBOLCPR170G9bhXY2BIRIaRsKYK7i/v374IghB29o0y+GkMNbR3FhAJYqv2W2otl1MhAjAljPK13TJRx4kCdUxYnX4MsTQHD5ZFOrh7tRGVNIW3gIBCIb+pIsA/vkFw57sY+uIu7JZa52gbuTZR0WnuBJIl9nghfEIIsPoVtG1FmsU504RoxlvdLIZVBlNuPnIvwApRvkpzVgYqO22P/SoFNFTduB4sXBQYPe/AkhWczqKC1e0N74eVjvwMYlMsWb85IuzQbNVZX5krjT6rNTMiNb1cCAgZBGYMj7gY2DNCs7mWgRHtW/gCj7xo2aQO1rQAAAABJRU5ErkJggg==';
	icons['act_zipper'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTQ4NDQ4NkZBNzNCMTFFMThBMjE5OUZBNkNBMjFCRDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTQ4NDQ4NzBBNzNCMTFFMThBMjE5OUZBNkNBMjFCRDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNDg0NDg2REE3M0IxMUUxOEEyMTk5RkE2Q0EyMUJEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNDg0NDg2RUE3M0IxMUUxOEEyMTk5RkE2Q0EyMUJEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtA53pEAAAH8SURBVHjafJPNTxNBGMafmd1WOZQUPeChkZBwFj9OHo0k3AkmxrOBgnioR/w6+BUvWk9tEy6cvHHgTsIfQKJVEk96MCSSENFA7EJ3Z8ZnZrZlK62T7c529n1/7/M+OyOMMbDjc2Pql1ZxEVohO0znJngJCRnmf18qb4x08sJuoFbFycVVQLf5T/sMIzIkT2k27hazBcJswIe3tyD0Meo7s1gaW0OsBZT2iedL5zA+U2Uhjb4AKsCVyjqfCKDmhYpA7c0dIGGCMNiq3sY42raPQQBLjoDdFZRfnEH9UQv4WoVSCsHYUhqU4N8he8xSkWPWn8SYf8lWRehrJH+8J4jTuQ/Am3bk5vlnQ2gsH6bB/OksAIMA1nwPaDw+ooLhE3BXgUqlDlQQuan8nAoeHqTLXFCt9H3MbZKgWbv54zTABUYusP40wv3XBb41XLYttFjYKmnj6twDGJVcOL0PXAsEBEDl1Vnkc9Q6NAqZSHzbXMPIxRLQ+sK1ErQ2/zGRFQNCpG052XfG7e/sYeLGdcJZT6ie7xCepAtvopGIWdW1ZKQDCEFigaayf1CZkLIPwC4G/Ewqh3fLsQ9u59y5CPIhPq68d9tdUFps5PduXudUNWtTB2yu4A6NyLRFJRT989q9jemM8mPmbfcA6PZlOAv7DruDPvUc8zTvrwADAFjSztFfBQjxAAAAAElFTkSuQmCC';
	icons['ext_asp'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQf/xAAkEAACAgIBAwQDAAAAAAAAAAABAgMEBREGBxIiABMhQRUyUf/EABYBAQEBAAAAAAAAAAAAAAAAAAQGCP/EACsRAAIBAwIEAwkAAAAAAAAAAAECBAMREgUhACIxQQYTURQVQlJxcoGhwf/aAAwDAQACEQMRAD8As3NuP5jkHUXPVMFjqtyybmSsyq9OvI5CXbALF5FJ+FCgDf8AAB6zbqFCRK1SRSipkcqh7dmb140Zp8iPF02hUlOVGNMDdu6J2B+v94pvQPmhx3JsThsbFVix2VnnM0deUaPjZljcwhFEMqrAIiO5u9QrkDxLVvhXU8JNGHRFlfLLe+/MQbW5WsuJF9xZrdzJ+J9O8yNVlViS9PG232Kwyuc1JbIGwxN19QCJ83Z4bzPlMwwVm3fky8zRyS0rTRrEt6SwNNEBvub2W/bXjog79DqU9Qg6hKrUYbOWe4JV7WDl9sbdSFPW224PCUaFNhR6VSUqKqC4yQG5phN8r2sMh0vvsRwh0yk/JdVeJihiL9CjQe0oWerKixxFb0i7ZkUDRsqmvvW/v4TokWV72jv7M9OmgccwPQmow3IHz4/i/BdYkUBpUhTIR6j49GUkkeUp2DE/AW/XH//Z';
	icons['ext_avi'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIxAAAgMAAgEDBQAAAAAAAAAAAQIDBAUGEQcSFCETJDFB4f/EABYBAQEBAAAAAAAAAAAAAAAAAAUGB//EACQRAAICAQQCAgMBAAAAAAAAAAECAxEEBRIhMQAiFFFBcYHx/9oADAMBAAIRAxEAPwDSWv46PIt3lG7d18jjHHqutbr2NO/kQXGew+jNGoJdewoDxAszAKCp/HqIwp9K+dm5U0sqxRq7AsVv2Ln9cciyTQv91uMOqfEx8bFijeWVkUhVdl9RGpPR74agBZ5/NXSPHlTb8Y8yyOPWM+lSz9i5aQ+ymBimCpPMkgiEaiJ1SOOM9FvWvTMAw+aXRTk6VmQ4DoAsm66awSLIYChtNUp+xRoHyV1VsbV8OXNSQs0YXsURZVSpO47gSWYcDabAseCtfXrxNzDifI8bYtYt3cs23WhTmLN96ZgPUF6KOFj7KsCAT0QT2J3Lhz1yMqBsZ2jeRm4Vufa+66NDxmFoSuLm4uTGsyRqvsy8em3q+1s9iv52j4tymTmHlPhcFDFt5uPkvN9KOShJXSJPaTJ+1CqPmNQoP8T0hM+bVsd5YGSNN3akAWpH1X0APDMyPGxNLyQchZJZNt04Yn3U/dn8kk/7/9k=';
	icons['ext_cmd'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgII/8QAJRAAAQMEAQMFAQAAAAAAAAAAAgEDBAUGBxEhCBITABYiMTJC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAExIf/aAAwDAQACEQMRAD8AvJONciZMzZesLHtAYq7keo1F+aRwoKoBFUpgipvSB0iqIIiD3fQLpOF9awNCdO9fr+K8t0rG8yge31qTj7k6Gbm23UNuU/HkNgDaNgYhHSOStuOC549r2mPJVA5q+cg4XzBkGZb1vypLdTq8zztS6LKkMvAk2S6yYG0ify+WtFr5couuHiK7Buq4ss9U1m3RULYq9GSNHOPIGRFeGOyIQ5qdwGbLekI5H5JSLZfpU0iGJ//Z';
	icons['ext_dir'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAJhAAAQMDAwMFAQAAAAAAAAAAAgEDBAUGEgAHERMhIggUMTJCYf/EABkBAAIDAQAAAAAAAAAAAAAAAAQHAAIFBv/EACgRAAIBAgUDAwUAAAAAAAAAAAECEQADBAYSMUEFIYETYaEiQnKCkf/aAAwDAQACEQMRAD8A0xTN+rniRKXUJV2SkdchRpr7U6nw5EM0djoZijbaR3QQSNMS6xdg7886QzZ5v4XEm1cLNEfapBJG0DQRE9vqNZyuxRX9TvE94jbwfmlNtepGtFU4EuuRpSWyWbkycNmz4oNR0YdNHxdR98VHMW0Xx+rmXPCLrs8Dma/edXxKabR3Ok7QSCId+Y45qC+ykFtvxYeeak9t7UXbTrejRaltnKnVQUxdmHAgSDQRAW2xbccPMUEGx4xx4JSX+6XmJyzmYqbWGtqEMzJWTP8AY9oNCJZuqo1W5P60tsva246nc1PiTrRqtKgPPh7uXORhGxYFc3A8HSLk0Hp/H7XVsuZK6tg+o272ORRbG8MD8e+3milF5zpdYHiv/9k=';
	icons['ext_dir2'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAK3RFWHRDcmVhdGlvbiBUaW1lANfyIDE1IP/t4iAyMDA0IDE3OjE3OjAwICswMzAwdMzpIwAAAAd0SU1FB9UFGg80MO/Mm9EAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAEZ0FNQQAAsY8L/GEFAAAAIVBMVEX/AADW2Na1vLKQv3IQkwg6qSFjtjvT9XGn8DyL4Thw0TA4AqrzAAAAAXRSTlMAQObYZgAAALZJREFUeNrNkd0WgyAMg4W04ef9H3gtsOFUvNp2loscNd+h2GzbP4lVw21eEjTe5iVxTbCmXGjEYgqYci5VQYZlbgC1XBI9N6Cq1Ati5A1Q4YlATS4Hik853cM+kGqnGKDiOv5sjAC0AUK4jtsIpn6CIPrL5aYGsKzjQ0D+AaCiii0StFV0f7+kVyKRtvPuu506YG2ZPJr+GmmVDkl7fPq8E2RIgZ1PILTOWlUhTj92Nqra+/f1AEz+CA0d2WWHAAAAAElFTkSuQmCC';
	icons['ext_doc'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwUGB//EACQQAAEEAgEEAgMAAAAAAAAAAAIBAwQFBhEHABIhMRMiCBZB/8QAGAEAAgMAAAAAAAAAAAAAAAAABAcCAwX/xAAlEQABAgUEAgMBAAAAAAAAAAABAgMEBRESIQAxQVEiYRNCcZH/2gAMAwEAAhEDEQA/ANm/IbEL/Lea8w/XoMOe/FdjlIB5YqvKBRIgtoAvL3H9y7dAi/ZwU9kO2rJoliGlzPzGlbuD2eRtjvo9aV03ZefmLqWhWgTyBuANic5xj13p1w5aZPxBbUkOfjceqcublquekDYRkSSPytRXQWK1sl+N1HTF5NIin2eRJNhzNqHmaXHW3KhCK0tPVwNxxkUx69YKlrz8uU2y43QrXStw/D45OCDnb+5Ly9cZfgvPeZW2P1Et1ywitRQljAdfEWyjxdm2oeENDY1td68+PS9QlxgIiWtMRTgFpJpcByrevFDqmaomcPM3YiCaKgpITWletveNStXYZnyPzljd/eVFgMg7SAioMB5piOy3IbNUHvRe0U0ReV9qq/3o5xyXQcudhod1J8VfYEkkaz4dqbRc1aiotlQ8hxgAa//Z';
	icons['ext_folder'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAJhAAAQMDAwMFAQAAAAAAAAAAAgEDBAUGEgAHERMhIggUMTJCYf/EABkBAAIDAQAAAAAAAAAAAAAAAAQHAAIFBv/EACgRAAIBAgUDAwUAAAAAAAAAAAECEQADBAYSMUEFIYETYaEiQnKCkf/aAAwDAQACEQMRAD8A0xTN+rniRKXUJV2SkdchRpr7U6nw5EM0djoZijbaR3QQSNMS6xdg7886QzZ5v4XEm1cLNEfapBJG0DQRE9vqNZyuxRX9TvE94jbwfmlNtepGtFU4EuuRpSWyWbkycNmz4oNR0YdNHxdR98VHMW0Xx+rmXPCLrs8Dma/edXxKabR3Ok7QSCId+Y45qC+ykFtvxYeeak9t7UXbTrejRaltnKnVQUxdmHAgSDQRAW2xbccPMUEGx4xx4JSX+6XmJyzmYqbWGtqEMzJWTP8AY9oNCJZuqo1W5P60tsva246nc1PiTrRqtKgPPh7uXORhGxYFc3A8HSLk0Hp/H7XVsuZK6tg+o272ORRbG8MD8e+3milF5zpdYHiv/9k=';
	icons['ext_htaceess'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQf/xAAlEAACAgIBAwMFAAAAAAAAAAABAgMEBREGAAcSISJBExQjMVL/xAAWAQEBAQAAAAAAAAAAAAAAAAAEBgj/xAAnEQACAgEDBAIBBQAAAAAAAAABAgMRBAAFEiEiMVEGQjJhgZGh8P/aAAwDAQACEQMRAD8Ar3cHH5HJdx8rTxFGtat2clf0hoQzSSP97YGyzoToKo+dAL8dZo3RZpd0mhgXkzO/SgT+Tf79NaR2uSGLbYpZ3IVUT7MAOxfR9/ydVzsnymTjnO4OK0oasdWxes17aV3IjZgk8scgj+mojdUiWJvFm8goLAMvrbfGtwONnLtsYoEsG62CRyIYChxNDiepuvAI1FfIsFcrBbcJCSQqlbHWrVSCeR5Aliw6CroWNC1rdPi/crkN3M4jLWSuQvCJa2Llm9HtSuHVxoD2sv6J2GYHoQxZsXd8jImxpHHJq4oT5YmwbFftdgkHSmyI8ra4IIMiNTxS+UgXwqiiOv8AdUQCNJ8BkhzHenj9zG427Xriaead5sTJT1+C17nJLBm3Ki+WwT/I6ZtWLO2+RZCwMid1loynkP56sCe4C7F+tE3PIiTZpYHnVm7QAsgf7J48EDtJqjXvX//Z';
	icons['ext_html'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwQG/8QAJxAAAgIBAwIFBQAAAAAAAAAAAgMBBAUGBxESFAAIEyEiMTJBYYH/xAAYAQACAwAAAAAAAAAAAAAAAAAFBgIEB//EACsRAAEDAgMECwAAAAAAAAAAAAECAxEABAUhQQYSUYETMTJhYnGhsbLBwv/aAAwDAQACEQMRAD8Ap3suOq7oapiuml8svkiYTqKWkRd/YjmSMJn7YGP54wTFHN2+eHiV8jSXcCXl+Zp28q25bcbrPA6axtAamKzbLRv46hVY4G01T1q9IRWQRX7cpAzE/T5ngh92nZ3EYuG7RsQFTvZ6wSCBoYyOhy1ohYOqQtLcZKnn15j2o33E09ka242ups6KyWVbYyuSGta7RxLWtpXBEhiFkJfKwlwl9YlMREx1TMLuJ4bfrv31ot1KSVGDB41FxtYcclsmSeOoUPsHlW82WbnNUeYrS2WsaYyeIrIbkWtOzXbADDZyD45MljHsVyA/fTz+eIJbPWN61iTbjzKkpG9mR3GrTfSO3KXFIKe16lSv1Ff/2Q==';
	icons['ext_jpg'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABQYHCP/EACYQAAIDAAEBBwUAAAAAAAAAAAECAwQFERIABgcWISIxCBMyQVH/xAAYAQADAQEAAAAAAAAAAAAAAAAFBgcBBP/EACgRAAEDAwMDAwUAAAAAAAAAAAECAxEEEiEAMVEFMkIGE0Fh0eHw8f/aAAwDAQACEQMRAD8A2Hd7u1btu/OMrMsSyaOj9yazm15pHYX7CjlnQk+0KPn4HZ6pLC0Lydk+RHingjU6rS4H1e3G6vgHyPI0yeHOo2D3jhz6CZiZ17VnqvFnkKq8xWJ064VjVYpY0ijiPSzdY9zeoBIGqCHm1KuuKMbzBFoIJk8zmCNMNE6ptxDYTaFZ4kZIIEDiMTOop4jeZvPNpsuTXzlpaF5Sa6WAsivbsSenShUhhIn9/EH544lHVOo9UdrSthpxISLRaVQQMT2+UT8/GcaIpT7aVtlsKBJO31n8f3Rj6fMy9meIeZBLRtqktw2XmkglVV6KlteSWQDkmUfvtvp96qpX3Gl06gl0QSZgEG6e3MxG4310LdeqXGy4O37ER+8a/9k=';
	icons['ext_js'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQMI/8QAIxAAAQQCAgICAwAAAAAAAAAAAgEDBAUGEQAHEiETIhRCYf/EABgBAAIDAAAAAAAAAAAAAAAAAAIFBAcI/8QAJhEAAgIBAwMEAwEAAAAAAAAAAQIEEQMFEiEAMVEGQUJhImJxkf/aAAwDAQACEQMRAD8A0X3bjlvk3cl5EoqwbKeckPMfwm3yQEiRNKpGK+Aopr79JsuZ/wDUcWTN13NhioXb8ew/Vf8AB99ur39PSY0TRcOWVk2LR+RAvfk8Hk8f3jpbriwyDqXK6+on42VRJsJsZl2SigEeU2ZsMEKCAeBqJuE6Jiex+RRVNLxno8iXoMjHBzxyr5HA3XwVO1a4FHb3BDcX9m1+rYImtxnl4ZG9UVjt5tSAzXZNiwApBXmr79mswvJGH905PPKvs3W5SNC29DjOnoVYi/cVEFRfsyo62nJuqYpsfW88nFgdlYKAyqT7JyKHPK1VjpfAMSVouCO+dFK2SGZR8n45N9mu6PUb/MT7Cz3FEhVNuARrdh1HJkN0FUClRzLew8QQRZX9l3/OBIMzUtTiusbIqpku2Ujgsp8UKC+T0UbFF03T5KtIxszoRSsp5CuB72bLeB1//9k=';
	icons['ext_mp3'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABwb/xAAiEAABBAEDBQEAAAAAAAAAAAACAQMEBQYHERIAExQhMUH/xAAXAQADAQAAAAAAAAAAAAAAAAACBAUH/8QAIREAAgICAgIDAQAAAAAAAAAAAQIDEQAEIWESURMxQsH/2gAMAwEAAhEDEQA/AEPN6S4yzWeyoMei1TljPs7QuU6DGPkQzZZERuOgS7I22n78H11pMDpDpJLKTQVffoZSVgqWcddJbGZptqTTYawtO5CuTkPulTye7GcFfMNpxARkBadBIvYLiRoaCilsSe4G8i7Wu+1za0BYo/ns2ObH1i8lOpbDe3jQqfLtUlucTyCfczDtIlJNhQnjaj+QcwCM9lQSEgkB+Ft7+L1TjnRodZUmVVXxLAnnjxP86wrsCjlNpxayMx1+w2wg4O/h9VXx3I/hsxXG47YozNJT3VpsR5HJ+bfV3979KbZhh0JI/nEjMb7/AD2fWAeFIJz/2Q==';
	icons['ext_php'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwQG/8QAIxAAAgICAgIBBQAAAAAAAAAAAQIDBAUGBxESEyEAFCIxMv/EABgBAAMBAQAAAAAAAAAAAAAAAAMFBgIH/8QAKBEAAQQABQMDBQAAAAAAAAAAAQIDBBEAEiExQQUiYTJRkRMjcYHR/9oADAMBAAIRAxEAPwBG33BvmN+3maPKYLERY67dt2ZctQaZnVslLD5ApXlY9M8K9Hr+h0CAxFk0vIy2KJsDava+SMcUltfVmSSVpSEqUTebbNXCVckfP5wu8DbbPqHJFDS6aUjSvSPJYkpTM1ewsteW3WsRx+pPW3pEUZ6LeahSwVh8r5raXWi+eP7RB/eKLokpUaYiAnZVkm7BsZkqGgrtoH300Bxh85XuYHe+S5J8Rlnt3prlaiF19chVfyyH3IaQS/gVIjQAhX69nl+0AYyXG1NNDMNKvuo7VhY/Flty5awyo57CfthSfUFa5tOK2O98a2cC09hyfO2DyuUo5FpWlmlsWbFGSBFVac8aD5RVUDyRVUdADoAdD6zLcZEYobUPnzgnRIs89UQ/JaUN7JFD0kDx4Ax//9k=';
	icons['ext_sql'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQf/xAAiEAABBAICAgMBAAAAAAAAAAACAQMEBQYSBxEhMQATFBb/xAAWAQEBAQAAAAAAAAAAAAAAAAACBQP/xAAeEQACAgIDAQEAAAAAAAAAAAABAgADESESMfHR8P/aAAwDAQACEQMRAD8AvXPlBb5BzJkTFFVBaT/0buAle1Kc+sIEMvG4EqInZ+E9qXXlVT5YoYLUCxki5S1pC/tRfi63yHifKq6qnYuVJKsZsZh97oGWZTZPMRDH6gDUlFwnHhcQu+nNelAhVc7VW5SwPQjqLVMFI7jucWX8rzjlFhNprOdHfQhZWHEdJSFyAw1sLotHouwEmwKJJ59p2JGsqagvLHsbhhaWxnyEfvj5Fl2DRKalvGma2bDjo7ZQnVdNsbAHlM3VaHpEAVXVS1HygonslyCo+WG4cEsuFOvs/9k=';
	icons['ext_tar'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQGB//EACcQAAEEAAYCAAcAAAAAAAAAAAIBAwQFBgcREhMhACIIFCMxQVFh/8QAGQEAAgMBAAAAAAAAAAAAAAAABAcCAwUG/8QAJhEAAgEDAwQCAwEAAAAAAAAAAQIRAwUSBCExAAYTIjJBFFFicf/aAAwDAQACEQMRAD8A3TOnClfiPNvMVh2hp7e4lThaiuWDDRPCKVMJUEDMfXQlMvuial/V852+2PV09BWvfkVaIG8lsucAICnctsN43BJAmGJYe8tLSFGzU/KKievrGMktUn5gwFZZ9Z2IAO0iydk22TGLmIUapq61LS4itmMN8A5YciUxGFp1hpraStkbrzb3JvTfxqOxeo9nW/Va+zfn0XVgpYPLNlKgMV+ME4kEENG8TyOqe7e4tA1ddLrPKXxAX1BGTMQrBmqBgCcUdcOFLCTj018Q9NMXMnGL8arnnYLI+YhyI7E7Vd1dEbFWzYBQVd7Rjoaonr30q+AXm6X4pXtVEF9K4AKmmjj98spIIbcEGVbcQQOk/TFfSXqlq6QKqHUswnj1DcfzII+xt1N5ZU9jLxRh96fVWZ2h28H6siPPUxbCzZd9t4cICjYKXRfj9qvmZYbh3BbdPStVJTT05aWApoJnZizYZExtJb4gDgCDe4ar3S/vqaYLUMlxJDCAuJ4YCBlJ/wB3++v/2Q==';
	icons['ext_txt'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwUG/8QAIhAAAgICAwABBQAAAAAAAAAAAQIDBAURBgcSIggTFCEx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgMEBf/EACARAAICAQMFAAAAAAAAAAAAAAECAAMRQaHBIWGB0fD/2gAMAwEAAhEDEQA/AEHsjE3sp2NykY84KHxlLzStlZsfXZ2N6yAQ1kgv+lA+JOtD+bG9qsgIM8zFcEuccRb+nLnb4jl2D47jo6K47MmaadKdyOZD6jsTwuYkXVeZUiWF09EsFVmVW0WnvTKljpKKHwwUazMZaO3hOfc3/Jq8iozzZW3JTuYrG3JmiLTWvMyNFZgX14nOiwkGnYaALBmBlKL1H3gwSrBmODv7l7qyfKck754vkpaOYEUAnWSfIV7oCIsNtUPqzNMRv7qfEOAGYgA69suwoKioI24xDQMbASDv3n//2Q==';
	icons['ext_unknown'] = 'data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAQABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgf/xAAlEAACAgIBAwMFAAAAAAAAAAACAwEEBQYRAAcSEyExCBQVIjL/xAAXAQADAQAAAAAAAAAAAAAAAAAEBQYH/8QAJhEAAQMEAgEDBQAAAAAAAAAAAQIEEQMFEiEAMTJhcdEUFUFRkf/aAAwDAQACEQMRAD8AbdxMNnNh7pbNS17G4yy5dvK3bbLlOlwADkbIkxjrA8CMD6cfsUR8R1srSpSoMqK6yiAQkDy7xGgE/HMfdirWe1qdFIJBUT11kdknlo7B7jb1HuXW0hWPr44LVx4XqqTj0580vtV2isViAGKlqVJLNgtHxKfeImZ69Nabhop9llEY69Qkg7k7k7AKTI4/s7tdF0liU4neW/TIEfrUDRIIg8ku765ka/ejKXb+uZG9Qr7FYsMX+JbaU9H3zG8ePECwSAv58oieeOY6dNXrY29FMV0pVgB5AEHGPcfzk0+t75V0XW+nUpGc+MgiZ61PtInif6f6ezZbv7g8vmMdkvWY5rrNmxj2V1gI0nqCI5EREY8wARj4jiIj26BvDhkm2roN6iT1ACgT5An8z6nh9ja3L7olw8pqHckiB1A+Bz//2Q==';
		
function image_error(source)
{
	console.log(rs);
	var img = image_basae64('ext_unknown');
	source.src = img;
	source.onerror = "";
	return true;
}

function image_ext(ext)
{
	
	
	
	if(in_array(ext, ext_image))
	{
		ext = 'jpg';
	}
	
	if(in_array(ext, ext_sql))
	{
		ext = 'sql';
	}
	
	
	if(in_array(ext, ext_font))
	{
		ext = 'fon';
	}
	
	if(in_array(ext, ext_audio))
	{
		ext = 'mp3';
	}
	
	
	var img_str = '<img src="'+ image_basae64('ext_' + ext) +'"  />';
	document.writeln(img_str);
}

function image_act(ext)
{ 
	
	var img_str = '<img src="'+ image_basae64('act_' + ext) + '" />';
	document.writeln(img_str);
}

function image_basae64(name)
{
	
	var rs = icons[name];
	if(rs == null)
	{
		rs = icons['ext_unknown'];
	}
	console.log(name);
	return rs;

}


function in_array(needle, haystack, argStrict) {
  
  var key = '',
    strict = !! argStrict;
   if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}

/*----------------------------------------------------*/

function CheckAll(form) {
        for(var i=0;i<form.elements.length;i++) {
                var e = form.elements[i];
                if (e.name != 'chkall')
                e.checked = form.chkall.checked;
    }
}
function $(id) {
        return document.getElementById(id);
}
function goaction(act){
        $('goaction').action.value=act;
        $('goaction').submit();
}
function goaction2(act){
        $('goaction2').action.value=act;
        $('goaction2').submit();
}

/*----------------------------------------------------*/

function createdir(){
        var newdirname;
        newdirname = prompt('Please input the directory name:', '');
        if (!newdirname) return;
        $('createdir').newdirname.value=newdirname;
        $('createdir').submit();
}
function fileperm(pfile){
        var newperm;
        newperm = prompt('Current file:'+pfile+'\nPlease input new attribute:', '');
        if (!newperm) return;
        $('fileperm').newperm.value=newperm;

        $('fileperm').pfile.value=pfile;
        $('fileperm').submit();
}
function copyfile(sname){
        var tofile;
        tofile = prompt('Original file:'+sname+'\nPlease input object file (fullpath):', '');
        if (!tofile) return;
        $('copyfile').tofile.value=tofile;
        $('copyfile').sname.value=sname;
        $('copyfile').submit();
}
function rename(oldname){
        var newfilename;
        newfilename = prompt('Former file name:'+oldname+'\nPlease input new filename:', '');
        if (!newfilename) return;
        $('rename').newfilename.value=newfilename;
        $('rename').oldname.value=oldname;
        $('rename').submit();
}

function change_date(file_path){

        var newDatetime;
        newDatetime = prompt('Former file name:'+file_path+'\nPlease input new Datetime:', '');
        if (!newDatetime) return;
		$('change_date').newfilename.value=file_path;
        $('change_date').newDatetime.value=newDatetime; 
        $('change_date').submit();
}


function dofile(doing,thefile,m){
        if (m && !confirm(m)) {
                return;
        }
        $('filelist').doing.value=doing;
        if (thefile){
                $('filelist').thefile.value=thefile;
        }
        $('filelist').submit();
}


function delfile(opfile,dir,m){
        if (m && !confirm(m)) {
                return;
        }
		
		$('fileopform').action.value= 'delfile';
        $('fileopform').opfile.value=opfile;
        $('fileopform').dir.value=dir;
        $('fileopform').submit();
       
}

function createfile(nowpath){
        var filename;
        filename = prompt('Please input the file name:', '');
        if (!filename) return;
    
		
		$('fileopform').action.value= 'newfile' ;
        $('fileopform').opfile.value= nowpath + filename;
        $('fileopform').dir.value=nowpath;
        $('fileopform').submit();
}

function do_zip(nowpath){
       
		
		$('fileopform').action.value= 'do_zip' ;    
        $('fileopform').dir.value=nowpath;
        $('fileopform').submit();
}


function do_gz(){
       
		
		$('filelist').action.value='do_zip';
        if (thefile){
                $('filelist').thefile.value=thefile;
        }
		$('filelist').dir.value = '';
		
        $('filelist').submit();
		
}

function opfile(action,opfile,dir){
        $('fileopform').action.value=action;
        $('fileopform').opfile.value=opfile;
        $('fileopform').dir.value=dir;
        $('fileopform').submit();
}
function godir(dir,view_writable){
        if (view_writable) {
                $('godir').view_writable.value=1;
        }
        $('godir').dir.value=dir;
        $('godir').submit();
}
function godir2(dir,view_writable){
        if (view_writable) {
                $('godir2').view_writable.value=1;
        }
        $('godir2').dir.value=dir;
        $('godir2').submit();

}

/*----------------------------------------------------*/

function mysqlfile(doing){
        if(!doing) return;
        $('doing').value=doing;
        $('mysqlfile').dbhost.value=$('dbinfo').dbhost.value;
        $('mysqlfile').dbport.value=$('dbinfo').dbport.value;
        $('mysqlfile').dbuser.value=$('dbinfo').dbuser.value;
        $('mysqlfile').dbpass.value=$('dbinfo').dbpass.value;
        $('mysqlfile').dbname.value=$('dbinfo').dbname.value;
        $('mysqlfile').charset.value=$('dbinfo').charset.value;
        $('mysqlfile').submit();
}

/*----------------------------------------------------*/

function editrecord(action, base64, tablename){
        if (action == 'del') {          
                if (!confirm('Is or isn\'t deletion record?')) return;
        }
        $('recordlist').doing.value=action;
        $('recordlist').base64.value=base64;
        $('recordlist').tablename.value=tablename;
        $('recordlist').submit();
}
function moddbname(dbname) {
        if(!dbname) return;
        $('setdbname').dbname.value=dbname;
        $('setdbname').submit();
}
function settable(tablename,doing,page) {
		 
		document.getElementById("settable").target="_self";
		settable_first(tablename,doing,page);
}

function settable2(tablename,doing,page) 
{
		 
		document.getElementById("settable").target="_blank";
		settable_first(tablename,doing,page);
}
function settable_first(tablename,doing,page) {
		 
	
		if(!tablename) return;
		
		if(doing == 'drop')
		{
			 if (!confirm('Drop Table `'+tablename+'` !!! Are you sure ?')) return;
		}
		
		
		if (doing) {
					$('settable').doing.value=doing;
		}
		if (page) {
					$('settable').page.value=page;
		}
		$('settable').tablename.value=tablename;
		$('settable').submit();
}