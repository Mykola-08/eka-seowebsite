import subprocess

result = subprocess.run(['npx', 'tsc', '--noEmit'], capture_output=True, text=True)
if result.returncode != 0:
    print(f"TypeScript Error: {result.stdout}\n{result.stderr}")
else:
    print("TypeScript compiles successfully.")
