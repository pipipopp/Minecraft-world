export default function Ground({ onAddBlock }) {
    const size = 10;

    return (
        <group>
            {[...Array(size)].map((_,x) =>
                [...Array(size)].map((_,z) => {
                    const pozX = x - size / 2;
                    const pozZ = z - size / 2;
                    return (
                        <mesh
                            key={`${x}-${z}`}
                            position={[pozX, 0, pozZ]}
                            onClick={(e) => {
                                e.stopPropagation();
                                const [gx, gy, gz] = e.point.toArray().map((n) => Math.floor(n + 0.5));
                                onAddBlock([gx, 1, gz]);
                            }}
                            receiveShadow
                        >
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="#4CAF50" />
                        </mesh>
                    );
                })
            )}
        </group>
    );
}