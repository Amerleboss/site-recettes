"""Assemble index.html from src/. Run: python3 build.py"""
import glob, re, pathlib
root = pathlib.Path(__file__).parent
t = (root / 'src/template.html').read_text(encoding='utf-8')
files = sorted(glob.glob(str(root / 'src/data/*.js')))
first, rest = files[0], files[1:]
t = re.sub(r"const ornamentSm = '.*?';\n", "const ornamentSm = '<span></span>';\n", t, count=1)
t = t.replace('/*DATA*/', pathlib.Path(first).read_text(encoding='utf-8'))
t = t.replace('/*MORE*/', '\n'.join(pathlib.Path(f).read_text(encoding='utf-8') for f in rest))
t = t.replace('/*ART*/', (root / 'src/art.js').read_text(encoding='utf-8'))
(root / 'index.html').write_text(t, encoding='utf-8')
print('index.html built from', len(files), 'data files')
