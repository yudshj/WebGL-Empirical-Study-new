'''
- Graphics
    - https://www.shadertoy.com/
    - https://www.awwwards.com/websites/webgl/
    - https://webflow.com/made-in-webflow/webgl
    - https://manu.ninja/25-real-world-applications-using-webgl/
- GPGPU
    - https://github.com/tensorflow/tfjs/blob/master/GALLERY.md
    - https://project-awesome.org/aaronhma/awesome-tensorflow-js
    # - https://github.com/tensorflow/tfjs-examples

---- rule ----

SEARCH := { <null> | webgl | GFX | GPGPU } + { VERB | VERB_ALT }

GFX := { three.js | PixiJS | babylon }   // top-3@https://gist.github.com/dmnsgn/76878ba6903cf15789b712464875cfdc
GPGPU := { tfjs | onnxweb | webdnn }     // top-3@https://blog.logrocket.com/ai-in-browsers-comparing-tensorflow-onnx-and-webdnn-for-image-classification/

VERB := { usecase | gallery | top-list | real-world\ websites }
VERB_ALT := { example | tutorial | demo }
'''

toplist_urls = [
    ''
]