import './App.css';
import { Heder } from "../Heder/Heder"
import { useState } from 'react';

function App() {

  const [allArrey, setAllArrey] = useState();
  const allProperty = [];

  const getValue = (s) => {

    var arr = [1000, 2000, 5000, 10000, 20000, 50000];
    var count = 0,
      a1 = arr[0],
      a2 = arr[1],
      a3 = arr[2],
      a4 = arr[3],
      a5 = arr[4],
      a6 = arr[5];
    for (var i = 0; i <= s; i += a1) {
      for (var j = i; j <= s; j += a2) {
        for (var k = j; k <= s; k += a3) {
          for (var l = k; l <= s; l += a4) {
            for (var g = l; g <= s; g += a5) {
              for (var d = g; d <= s; d += a6) {
                if (d == s) {
                  var ti = i / a1,
                    tj = (j - i) / a2,
                    tk = (k - j) / a3,
                    tl = (l - k) / a4,
                    tg = (g - l) / a5,
                    td = (d - g) / a6;
                  count++;

                  if (ti == 0) {
                    if (tj == 0) {
                      if (tk == 0) {
                        if (tl == 0) {
                          if (tg == 0) {
                            allProperty.push(<div key={Math.random()} className="style">{count} ) {td} * 50000 = {s} </div>)
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tg} * 20000 = {s} </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tg} * 20000 + {td} * 50000 = {s}  </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tl} * 10000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tl} * 10000 {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tl} * 10000 {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tl} * 10000 {tg} * 20000 {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      } else {
                        if (tl == 0) {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 {tg} * 20000 {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 {tl} * 10000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 {tl} * 10000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 + {tl} * 10000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tk} * 5000 + {tl} * 10000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      }
                    } else {
                      if (tk == 0) {
                        if (tl == 0) {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tl} * 10000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tl} * 10000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tl} * 10000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tl} * 10000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      } else {
                        if (tl == 0) {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 =  {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 + {tl} * 10000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 + {tl} * 10000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 + {tl} * 10000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {tj} * 2000 + {tk} * 5000 + {tl} * 10000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (tj == 0) {
                      if (tk == 0) {
                        if (tl == 0) {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tl} * 10000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tl} * 10000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tl} * 10000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tl} * 10000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      } else {
                        if (tl == 0) {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 + {tl} * 10000 = {s} <br/> </div>)

                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 + {tl} * 10000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 + {tl} * 10000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tk} * 5000 + {tl} * 10000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      }
                    } else {
                      if (tk == 0) {
                        if (tl == 0) {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tl} * 10000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tl} * 10000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tl} * 10000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tl} * 10000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      } else {
                        if (tl == 0) {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        } else {
                          if (tg == 0) {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 + {tl} * 10000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 + {tl} * 10000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          } else {
                            if (td == 0) {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 + {tl} * 10000 + {tg} * 20000 = {s} <br/> </div>)
                            } else {
                              allProperty.push(<div key={Math.random()} className="style">{count} ) {ti} * 1000 + {tj} * 2000 + {tk} * 5000 + {tl} * 10000 + {tg} * 20000 + {td} * 50000 = {s} <br/> </div>)
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    setAllArrey([...allProperty]);
  }
  return (
    <div className="App">
      <Heder getValue={getValue}/>
      {allArrey}
    </div>
  );
}

export default App;
